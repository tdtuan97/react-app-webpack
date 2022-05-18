import React, {Component} from 'react';
import {Button, Card, Form, Input, Select, Table} from 'antd';
import {Link} from "react-router-dom";
import {Row, Col} from 'antd';
import {CreditCardOutlined} from "@ant-design/icons";
import {CardCustomer} from "../../../Customer/components/CardCustomer";

const {Option} = Select;

const columns = [
    {
        title    : 'ID',
        dataIndex: 'id',
        sorter   : true,
        render   : id => <Link to={'/customer-service/detail/' + id}>{id}</Link>,
        width    : '150px',
        align    : 'center',
    },
    {
        title    : 'Tên dịch vụ',
        dataIndex: 'name',
        sorter   : true,
    },
    {
        title    : 'Đơn vị',
        dataIndex: 'unit',
    },
    {
        title    : 'Mô tả',
        dataIndex: 'description',
        width    : '40%',
    },
];

class President extends Component {
    render() {
        let {
                data,
                pagination,
                loading,
                currentCustomer,
                currentCustomerLoading,
                price,
                onChangeCustomer,
                customers,
                customersLoading,
                onFinish,
                pendingTransactionCreate
            } = this.props;
        return (
            <div className="features feature-customer-service">
                <Row gutter={24}
                     className="user-detail">
                    <Col xs={24} md={8}>
                        <CardCustomer
                            customer={currentCustomer}
                            loading={currentCustomerLoading}
                        />
                    </Col>
                    <Col xs={24} md={16}>
                        <Card
                            title={
                                <div>
                                    <CreditCardOutlined/> Cập nhật bảng giá
                                </div>
                            }
                        >
                            <Form
                                className="pay-in-form"
                                onFinish={() => onFinish()}
                            >
                                <Form.Item>
                                    <Select
                                        loading={customersLoading}
                                        size="large"
                                        showSearch
                                        style={{width: '100%'}}
                                        placeholder="Select a user"
                                        optionFilterProp="children"
                                        onChange={onChangeCustomer}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {
                                            customers.map((customer, key) => {
                                                return (<Option key={key}
                                                                value={customer.id}>{customer.first_name + ' ' + customer.last_name}</Option>)
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="amount">
                                    <Input
                                        type="number"
                                        value={price}
                                        placeholder="Amount"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary"
                                            htmlType="submit"
                                            size="large"
                                            loading={pendingTransactionCreate}
                                            block
                                    >
                                        Pay in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>

                    </Col>
                    <Col span={24}>
                        <Table
                            columns={columns}
                            rowKey={record => record.id}
                            dataSource={data}
                            pagination={pagination}
                            loading={loading}
                            onChange={(pagination, filters, sorter) => this.props.handleTableChanges(pagination, filters, sorter)
                            }
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default President;