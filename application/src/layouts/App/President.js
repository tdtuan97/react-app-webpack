import React, {Component} from "react";

import {Layout} from 'antd';
import {Header, Slider} from "../index";

class President extends Component {
    render() {
        return (
            <Layout>
                <Slider/>
                <div className="app-layout-space"/>
                <Layout>
                    <Header/>
                    <div className="app-header-space"/>
                    <Layout className="app-content-wrapper">
                        <Layout.Content className="app-content">
                            {this.props.children}
                        </Layout.Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default President