import React, {Component} from 'react';
import {FormService} from "../../components/FormService";

class President extends Component {
    render() {
        return (
            <div className="features feature-service">
                <FormService
                    {...this.props}
                />
            </div>
        )
    }
}

export default President;