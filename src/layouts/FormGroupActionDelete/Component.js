import React, {Component} from 'react';
import {AntButton} from "../AntButton";

class CustomComponent extends Component {
    render() {
        return (
            <div className="action-item">
                <AntButton danger htmlType="submit" {...this.props}>
                    Xoá
                </AntButton>
            </div>
        )
    }
}

export default CustomComponent