import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createCustomer} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.createCustomer(data)
    }

    render() {
        const {create} = this.props.customer;

        if (create.data.id !== undefined) {
            return (
                <Redirect to={'/customers/detail/' + create.data.id}/>
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
        createCustomer: (data) => {
            dispatch(createCustomer(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        customer: state.customer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)