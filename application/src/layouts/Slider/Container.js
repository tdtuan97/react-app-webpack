import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';

class Container extends Component {

    render() {
        return (<President
            {...this.props}
        />)
    }
}

function mapDispatchToProps() {
    return {
        //
    };
}

function mapStateToProps(state) {
    return {
        router: state.router,
        auth  : state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)