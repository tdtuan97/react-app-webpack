import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom"
import {login} from "../../redux/actions";

class Container extends Component {
    handleLogin = (data) => {
        this.props.login({
            username: data.username !== undefined ? data.username : '',
            password: data.password !== undefined ? data.password : '',
        })
    }

    render() {
        const auth = this.props.auth;
        const user = auth.user;

        if (user.username !== null && user.username !== undefined) {
            return (
                <Redirect to={"/"}/>
            )
        }

        return (<President
            crud={this.props.crud}
            loading={this.props.auth.login.loading}
            handleLogin={this.handleLogin}
        />)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (data) => {
            dispatch(login(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        crud: state.crud
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)