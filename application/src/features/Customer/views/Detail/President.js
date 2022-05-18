import React, {Component} from 'react';
import {FormCustomer} from "../../components";
import {ModalConfirm} from "../../../../layouts";

class President extends Component {
    render() {
        return (
            <div className="features feature-customer">
                <FormCustomer
                    {...this.props}
                />
                <ModalConfirm
                    onOk={this.props.onOkDelete}
                    onCancel={this.props.onCancelDelete}
                    visible={this.props.deleteModalVisible}
                    message="Chắc chắn xoá khách hàng ?"
                />
            </div>
        )
    }
}

export default President;