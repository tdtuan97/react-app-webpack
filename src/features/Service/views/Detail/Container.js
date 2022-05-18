import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";
import {updateService, detailService, deleteService, visibleConfirmDelete} from "../../redux/actions";
import {ErrorPage} from "../../../Exceptions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.updateService(this.props.service.detail.id, data)
    }

    onOkDelete = () => {
        this.props.deleteService(this.props.service.detail.id)
    }

    render() {
        let {detail} = this.props.service;

        if (this.props.service.delete.isDeleted === true) {
            return (
                <Redirect to="/services"/>
            )
        }

        if (detail.isFound === false) {
            return (
                <ErrorPage code={404}/>
            )
        }

        return (
            <President
                isDetail={true}
                data={detail.data}
                formLoading={detail.loading}
                errors={detail.errors}

                updateLoading={detail.update.loading}
                onFinish={this.onFinish}
                onUpdate={this.updateService}
                onUpdateCancel={this.props.updateCancel}

                deleteModalVisible={this.props.service.delete.modalVisible}
                deleteLoading={this.props.service.delete.loading}
                onShowConfirmDelete={this.props.showConfirmDelete}
                onCancelDelete={this.props.hideConfirmDelete}
                onOkDelete={this.onOkDelete}
            />
        )
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.detailService(id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateService    : (id, data) => {
            dispatch(updateService(id, data));
        },
        detailService    : (id) => {
            dispatch(detailService(id));
        },
        showConfirmDelete: () => {
            dispatch(visibleConfirmDelete(true));
        },
        hideConfirmDelete: () => {
            dispatch(visibleConfirmDelete(false));
        },
        deleteService    : (id) => {
            dispatch(deleteService(id));
        },
    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/services/detail/:id");
    return {
        match  : matchSelector(state),
        service: state.service,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)