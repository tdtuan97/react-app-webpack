import React, {Component} from 'react';
import {FormCustomerService} from "../../components/FormCustomerService";
import {ModalConfirm} from "../../../../layouts";

class President extends Component {
    render() {
        return (
            <div className="features feature-customer-service">
                <FormCustomerService
                    {...this.props}
                />
                <ModalConfirm
                    onOk={this.props.onOkDelete}
                    onCancel={this.props.onCancelDelete}
                    visible={this.props.deleteModalVisible}
                    message="Chắc chắn xoá dịch vụ ?"
                />
            </div>
        )
    }
}

export default President;