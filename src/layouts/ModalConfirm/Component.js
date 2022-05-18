import React, {Component} from 'react';
import {Modal} from 'antd';

class CustomComponent extends Component {
    render() {
        let {onOk, onCancel, visible, message, title} = this.props;
        title = undefined ? "Xác nhận" : title;
        return (
            <Modal
                title={title}
                onOk={onOk}
                onCancel={onCancel}
                visible={visible}
                okText="Đồng ý"
                cancelText="Huỷ bỏ"
            >
                <p>{message}</p>
            </Modal>
        )
    }
}

export default CustomComponent