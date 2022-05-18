import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createProduct} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class Container extends Component {
    onFinish = (data) => {
        this.props.createProduct(data)
    }

    render() {
        const {create} = this.props.product;

        if (create.data.id !== undefined) {
            return (
                <Redirect to={'/products/detail/' + create.data.id}/>
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
        createProduct: (data) => {
            dispatch(createProduct(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        product: state.product,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)