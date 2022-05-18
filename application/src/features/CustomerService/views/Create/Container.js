import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createCustomerService} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.createCustomerService(data)
    }

    render() {
        const {create} = this.props.customerService;

        if (create.data.id !== undefined) {
            return (
                <Redirect to={'/customer-service/detail/' + create.data.id}/>
            )
        }

        return (
            <President
                errors={create.errors}
                createLoading={create.loading}
                onFinish={this.onFinish}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createCustomerService: (data) => {
            dispatch(createCustomerService(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        customerService: state.customerService,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)