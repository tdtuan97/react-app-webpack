import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {fetchTableCustomerService} from "../../redux/actions";
import {detailCustomer} from "../../../Customer/redux/actions";
import {getCustomers} from "../../../MasterData/redux/actions";

class Container extends Component {
    handleTableChange = (pagination, filters, sorter) => {
        this.props.fetchTableCustomerService({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    onChangeCustomer = (value) => {
        this.props.detailCustomer(value)
    };

    render() {
        let {detail}    = this.props.customer;
        let {customers} = this.props.masterData;
        return (
            <President
                customers={customers.data}
                customersLoading={customers.loading}
                onChangeCustomer={this.onChangeCustomer}
                currentCustomer={detail.data}
                currentCustomerLoading={detail.loading}
                handleTableChanges={this.handleTableChange}
                {...this.props.customerService.list}
            />
        )
    }

    componentDidMount() {
        this.props.fetchTableCustomerService({});
        this.props.getCustomers();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTableCustomerService: (data) => {
            dispatch(fetchTableCustomerService(data));
        },
        detailCustomer           : (id) => {
            dispatch(detailCustomer(id));
        },
        getCustomers             : (id) => {
            dispatch(getCustomers(id));
        },
    };
}

function mapStateToProps(state) {
    return {
        customer       : state.customer,
        customerService: state.customerService,
        masterData     : state.masterData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)