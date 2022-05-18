import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import {Menu, Dropdown} from 'antd';
import img_user from "../../images/users/user.png"
import {UserOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons';
import {AntAvatar} from "../AntAvatar";

class President extends Component {
    render() {
        // Auth
        const auth      = this.props.auth;
        const {user}    = auth;
        const full_name = user.first_name + ' ' + user.last_name;

        return (
            <header className="page-header">
                <div className="page-header-content">
                    <div className="logo">
                        <Link to="/">
                            <Logo/>
                        </Link>
                    </div>
                    <div className="page-header-space"/>
                    <div className="page-header-control">
                        <div className="page-header-item">
                            <Dropdown className="page-header-menu" overlay={
                                <Menu>
                                    <Menu.Item className="page-header-menu-item" key={1} onClick={() => {
                                        this.props.handleLogout()
                                    }}>
                                        <UserOutlined/>Thông tin
                                    </Menu.Item>
                                    <Menu.Item className="page-header-menu-item" key={2} onClick={() => {
                                        this.props.handleLogout()
                                    }}>
                                        <SettingOutlined/>Cài đặt
                                    </Menu.Item>
                                    <Menu.Divider/>
                                    <Menu.Item className="page-header-menu-item" key={3} onClick={() => {
                                        this.props.handleLogout()
                                    }}>
                                        <LogoutOutlined/>Đăng xuất
                                    </Menu.Item>
                                </Menu>
                            }>
                                <a onClick={e => e.preventDefault()}>
                                    <AntAvatar className="page-header-avatar" icon={<UserOutlined/>} size="small"
                                               src={img_user}/>
                                    <span className="page-header-title">{full_name}</span>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default President;