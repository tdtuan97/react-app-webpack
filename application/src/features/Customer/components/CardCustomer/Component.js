import React, {Component} from 'react';
import {UserOutlined} from "@ant-design/icons";
import {Loading} from "../../../../layouts/Loading";
import {Avatar, Card} from "antd";
import img_user from "../../../../images/users/user.png";
import {DataEmpty} from "../../../../layouts"
import _ from "lodash";

class CustomComponent extends Component {
    render() {
        const {customer, loading} = this.props
        return (
            <Card className="user-general" title={
                <div>
                    <UserOutlined/> Thông tin khách hàng
                </div>
            }
            >
                {
                    loading ? <Loading/> :
                        (
                            _.isEmpty(customer) ? <DataEmpty/> :
                                <div className="user-data-wrapper">
                                    <div className="user-data avatar-wrapper text-center">
                                        <Avatar
                                            src={img_user}
                                            size={100}
                                        />
                                        <div className="avatar-label">
                                            {customer.full_name}
                                        </div>
                                    </div>
                                    <div className="user-data account-wrapper">
                                        <div className="account-data">
                                            <span className="account-data-key">Tên đăng nhập:</span>
                                            <span className="account-data-value">{customer.username}</span>
                                        </div>
                                        <div className="account-data">
                                            <span className="account-data-key"> Họ tên:</span>
                                            <span className="account-data-value">
                                                {customer.first_name + ' ' + customer.last_name}
                                            </span>
                                        </div>
                                        <div className="account-data"><span
                                            className="account-data-key"> Số điện thoại:</span>
                                            <span className="account-data-value">{customer.phone_number}</span>
                                        </div>
                                        <div className="account-data">
                                            <span className="account-data-key">Địa chỉ:</span>
                                            <span className="account-data-value">{customer.address}</span>
                                        </div>
                                    </div>
                                </div>
                        )
                }
            </Card>
        )
    }
}

export default CustomComponent