import React, {Component} from 'react';
import {AntButton} from "../AntButton";

class CustomComponent extends Component {
    render() {
        return (
            <div className="action-item">
                <AntButton type="primary" htmlType="submit" {...this.props}>
                    Lưu
                </AntButton>
            </div>
        )
    }
}

export default CustomComponent