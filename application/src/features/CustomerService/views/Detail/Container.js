import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";
import {
    updateCustomerService,
    detailCustomerService,
    deleteCustomerService,
    visibleConfirmDelete
} from "../../redux/actions";
import {ErrorPage} from "../../../Exceptions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.updateCustomerService(this.props.customerService.detail.id, data)
    }

    onOkDelete = () => {
        this.props.deleteCustomerService(this.props.customerService.detail.id)
    }

    render() {
        let {detail} = this.props.customerService;

        if (this.props.customerService.delete.isDeleted === true) {
            return (
                <Redirect to="/customer-service"/>
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

                deleteModalVisible={this.props.customerService.delete.modalVisible}
                deleteLoading={this.props.customerService.delete.loading}
                onShowConfirmDelete={this.props.showConfirmDelete}
                onCancelDelete={this.props.hideConfirmDelete}
                onOkDelete={this.onOkDelete}
            />
        )
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.detailCustomerService(id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateService        : (id, data) => {
            dispatch(updateCustomerService(id, data));
        },
        detailCustomerService: (id) => {
            dispatch(detailCustomerService(id));
        },
        showConfirmDelete    : () => {
            dispatch(visibleConfirmDelete(true));
        },
        hideConfirmDelete    : () => {
            dispatch(visibleConfirmDelete(false));
        },
        deleteService        : (id) => {
            dispatch(deleteCustomerService(id));
        },
    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/customer-service/detail/:id");
    return {
        match          : matchSelector(state),
        customerService: state.customerService,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)