import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AntButton} from "../AntButton";

class CustomComponent extends Component {
    render() {
        return (
            <div className="action-item">
                <div className="action-item">
                    <Link to="/products">
                        <AntButton {...this.props}>
                            Quay lại
                        </AntButton>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CustomComponent