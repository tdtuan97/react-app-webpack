import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {fetchTableService} from "../../redux/actions";

class Container extends Component {
    handleTableChange = (pagination, filters, sorter) => {
        this.props.fetchTableService({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    render() {
        return (
            <President handleTableChanges={this.handleTableChange} {...this.props.service.list} />
        )
    }

    componentDidMount() {
        this.props.fetchTableService({});
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTableService: (data) => {
            dispatch(fetchTableService(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        service: state.service,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)