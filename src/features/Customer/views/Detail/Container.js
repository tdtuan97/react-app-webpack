import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";
import {updateCustomer, detailCustomer, deleteCustomer, visibleConfirmDelete} from "../../redux/actions";
import {ErrorPage} from "../../../Exceptions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.updateCustomer(this.props.customer.detail.id, data)
    }

    onOkDelete = () => {
        this.props.deleteCustomer(this.props.customer.detail.id)
    }

    render() {
        let {detail} = this.props.customer;

        if (this.props.customer.delete.isDeleted === true) {
            return (
                <Redirect to="/customers"/>
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
                onUpdate={this.updateCustomer}
                onUpdateCancel={this.props.updateCancel}

                deleteModalVisible={this.props.customer.delete.modalVisible}
                deleteLoading={this.props.customer.delete.loading}
                onShowConfirmDelete={this.props.showConfirmDelete}
                onCancelDelete={this.props.hideConfirmDelete}
                onOkDelete={this.onOkDelete}
            />
        )
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.detailCustomer(id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCustomer    : (id, data) => {
            dispatch(updateCustomer(id, data));
        },
        detailCustomer    : (id) => {
            dispatch(detailCustomer(id));
        },
        showConfirmDelete: () => {
            dispatch(visibleConfirmDelete(true));
        },
        hideConfirmDelete: () => {
            dispatch(visibleConfirmDelete(false));
        },
        deleteCustomer    : (id) => {
            dispatch(deleteCustomer(id));
        },
    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/customers/detail/:id");
    return {
        match  : matchSelector(state),
        customer: state.customer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)