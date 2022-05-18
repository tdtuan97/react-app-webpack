import React, {Component} from 'react';
import {FormCustomer} from "../../components";

class President extends Component {
    render() {
        return (
            <div className="features feature-customer">
                <FormCustomer
                    {...this.props}
                />
            </div>
        )
    }
}

export default President;