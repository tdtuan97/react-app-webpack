import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {fetchTableCustomer} from "../../redux/actions";

class Container extends Component {
    handleTableChange = (pagination, filters, sorter) => {
        this.props.fetchTableCustomer({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    render() {
        return (
            <President handleTableChanges={this.handleTableChange} {...this.props.customer.list} />
        )
    }

    componentDidMount() {
        this.props.fetchTableCustomer({});
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTableCustomer: (data) => {
            dispatch(fetchTableCustomer(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        customer: state.customer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)