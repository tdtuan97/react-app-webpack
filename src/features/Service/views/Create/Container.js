import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createService} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.createService(data)
    }

    render() {
        const {create} = this.props.service;

        if (create.data.id !== undefined) {
            return (
                <Redirect to={'/services/detail/' + create.data.id}/>
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
        createService: (data) => {
            dispatch(createService(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        service: state.service,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)