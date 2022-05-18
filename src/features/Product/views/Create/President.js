import React, {Component} from 'react';
import {FormProduct} from "../../components";

class President extends Component {
    render() {
        return (
            <div className="features feature-product">
                <FormProduct
                    {...this.props}
                />
            </div>
        )
    }
}

export default President;