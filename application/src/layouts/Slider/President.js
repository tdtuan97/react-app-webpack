import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {AuditOutlined, AppstoreOutlined, DashboardOutlined, UserOutlined, ClearOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

class President extends Component {
    render() {
        const {router} = this.props;
        const pathname = router.location.pathname;

        let selectDefault;
        let openDefault;
        do {
            if (pathname === "/") {
                openDefault   = 'dashboard'
                selectDefault = 'dashboard'
                break;
            }

            if (pathname.indexOf('/products') !== -1) {
                openDefault = 'products'
                if (pathname.indexOf('/products/create') !== -1) {
                    selectDefault = 'products-create'
                    break;
                }
                if (pathname.indexOf('/products/detail') !== -1) {
                    selectDefault = 'products'
                    break;
                }
                selectDefault = 'products-index'
                break;
            }

            if (pathname.indexOf('/customer-service') !== -1) {
                openDefault = 'customer-service'
                if (pathname.indexOf('/customer-service/create') !== -1) {
                    selectDefault = 'customer-service-create'
                    break;
                }
                if (pathname.indexOf('/customer-service/detail') !== -1) {
                    selectDefault = 'customer-service'
                    break;
                }
                selectDefault = 'customer-service-index'
                break;
            }

            if (pathname.indexOf('/services') !== -1) {
                openDefault = 'services'
                if (pathname.indexOf('/services/create') !== -1) {
                    selectDefault = 'services-create'
                    break;
                }
                if (pathname.indexOf('/services/detail') !== -1) {
                    selectDefault = 'services'
                    break;
                }
                selectDefault = 'services-index'
                break;
            }

            if (pathname.indexOf('/customers') !== -1) {
                openDefault = 'customers'
                if (pathname.indexOf('/customers/create') !== -1) {
                    selectDefault = 'customers-create'
                    break;
                }
                if (pathname.indexOf('/customers/detail') !== -1) {
                    selectDefault = 'customers'
                    break;
                }
                selectDefault = 'customers-index'
                break;
            }

            if (pathname.indexOf('/orders') !== -1) {
                openDefault = 'orders'
                if (pathname.indexOf('/orders/create') !== -1) {
                    selectDefault = 'orders-create'
                    break;
                }
                selectDefault = 'orders-index'
                break;
            }

            openDefault   = 'dashboard'
            selectDefault = 'dashboard'
        } while (false);

        return (
            <Layout.Sider className="left-slider">
                <Menu
                    className="left-slider-menu"
                    mode="inline"
                    defaultSelectedKeys={[selectDefault]}
                    defaultOpenKeys={[openDefault]}
                >
                    <Menu.Item icon={<DashboardOutlined/>} key="dashboard">
                        Trang ch???
                        <Link to="/"/>
                    </Menu.Item>
                    <Menu.SubMenu key="customer-service" icon={<ClearOutlined />} title="B???ng gi?? d???ch v???">
                        <Menu.Item key="customer-service-index">
                            T???t c??? b???ng gi??
                            <Link to="/customer-service"/>
                        </Menu.Item>
                        <Menu.Item key="customer-service-create">
                            Th??m b???ng gi??
                            <Link to="/customer-service/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="customers" icon={<UserOutlined />} title="Kh??ch h??ng">
                        <Menu.Item key="customers-index">
                            Danh s??ch kh??ch h??ng
                            <Link to="/customers"/>
                        </Menu.Item>
                        <Menu.Item key="customers-create">
                            Th??m kh??ch h??ng
                            <Link to="/customers/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="products" icon={<AppstoreOutlined/>} title="S???n ph???m">
                        <Menu.Item key="products-index">
                            Danh s??ch s???n ph???m
                            <Link to="/products"/>
                        </Menu.Item>
                        <Menu.Item key="products-create">
                            Th??m s???n ph???m
                            <Link to="/products/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="services" icon={<ClearOutlined />} title="D???ch v???">
                        <Menu.Item key="services-index">
                            Danh s??ch d???ch v???
                            <Link to="/services"/>
                        </Menu.Item>
                        <Menu.Item key="services-create">
                            Th??m d???ch v???
                            <Link to="/services/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="orders" icon={<AuditOutlined/>} title="????n h??ng">
                        <Menu.Item key="orders-index">
                            Danh s??ch ????n h??ng
                            <Link to="/orders"/>
                        </Menu.Item>
                        <Menu.Item key="orders-create">
                            Th??m ????n h??ng
                            <Link to="/orders/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Layout.Sider>
        )
    }
}

export default President;