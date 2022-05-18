import React, {Component} from 'react';
import {
    AntCard,
    AntForm,
    AntFormItem,
    AntInput, AntInputTextArea,
    FormGroupAction, FormGroupActionBack, FormGroupActionDelete, FormGroupActionSave, FormGroupActionUpdate,
} from "../../../../layouts";

class CustomComponent extends Component {
    render() {
        let {
                formLoading,
                data,
                errors,
                createLoading,
                updateLoading,
                deleteLoading,
                onShowConfirmDelete,
                isDetail
            } = this.props

        errors = errors !== undefined ? errors : {};
        data   = data !== undefined ? data : {};

        const {username, password, password_confirm, first_name, last_name, email, phone_number, address} = data;

        formLoading      = formLoading === true;
        const form_title = isDetail === true ? "Chi tiết khách hàng" : "Thêm khách hàng";
        return (
            <AntCard
                title={form_title}
                bordered={true}
                loading={formLoading}
            >
                <AntForm
                    className="form-center form-customer"
                    layout="vertical"
                    onFinish={(data => this.props.onFinish(data))}
                    initialValues={{
                        username        : username,
                        password        : password,
                        password_confirm: password_confirm,
                        first_name      : first_name,
                        last_name       : last_name,
                        email           : email,
                        phone_number    : phone_number,
                        address         : address,
                    }}
                >
                    <AntFormItem
                        required={true}
                        label="Tên đăng nhập"
                        name="username"
                        errors={errors.username}
                    >
                        <AntInput/>
                    </AntFormItem>
                    <AntFormItem
                        label="Mật khẩu"
                        name="password"
                        errors={errors.username}
                    >
                        <AntInput type="password"/>
                    </AntFormItem>
                    <AntFormItem
                        label="Xác nhận mật khẩu"
                        name="password_confirm"
                        errors={errors.password_confirm}
                    >
                        <AntInput type="password"/>
                    </AntFormItem>
                    <AntFormItem
                        className="form-customer-inline"
                        required={true}
                        label="Họ"
                        name="first_name"
                        errors={errors.first_name}
                    >
                        <AntInput className="form-customer-child"/>
                    </AntFormItem>
                    <AntFormItem
                        className="form-customer-inline form-customer-right"
                        required={true}
                        label="Tên"
                        name="last_name"
                        errors={errors.last_name}
                    >
                        <AntInput className="form-customer-child"/>
                    </AntFormItem>
                    <AntFormItem
                        required={true}
                        label="Email"
                        name="email"
                        errors={errors.email}
                    >
                        <AntInput/>
                    </AntFormItem>
                    <AntFormItem
                        required={true}
                        label="Số điện thoại"
                        name="phone_number"
                        errors={errors.phone_number}
                    >
                        <AntInput/>
                    </AntFormItem>
                    <AntFormItem
                        label="Địa chỉ"
                        name="address"
                        errors={errors.address}
                    >
                        <AntInputTextArea rows={10}/>
                    </AntFormItem>
                    <AntFormItem className="text-center">
                        {isDetail
                            ?
                            <FormGroupAction>
                                <FormGroupActionUpdate loading={updateLoading}/>
                                <FormGroupActionDelete
                                    htmlType="button"
                                    onClick={onShowConfirmDelete}
                                    loading={deleteLoading}/>
                                <FormGroupActionBack/>
                            </FormGroupAction>
                            :
                            <FormGroupAction>
                                <FormGroupActionSave loading={createLoading}/>
                                <FormGroupActionBack/>
                            </FormGroupAction>
                        }

                    </AntFormItem>
                </AntForm>
            </AntCard>
        )
    }
}

export default CustomComponent