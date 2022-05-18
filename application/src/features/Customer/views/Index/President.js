import React, {Component} from 'react';
import {Table} from 'antd';
import {Link} from "react-router-dom";

const columns = [
    {
        title    : 'ID',
        dataIndex: 'id',
        sorter   : true,
        render   : id => <Link to={'/customers/detail/' + id}>{id}</Link>,
        width    : '150px',
        align    : 'center',
    },
    {
        title    : 'Tên tài khoản',
        dataIndex: 'username',
        sorter   : true,
    },
    {
        title    : 'Họ tên',
        dataIndex: 'first_name',
        render   : (idx, item) => item.first_name + ' ' + item.last_name,
    },
    {
        title    : 'Email',
        dataIndex: 'email',
    },
    {
        title    : 'Số điện thoại',
        dataIndex: 'phone_number',
        width    : '150px',
    },

    {
        title    : 'Địa chỉ',
        dataIndex: 'address',
    },
];

class President extends Component {
    render() {
        let {data, pagination, loading} = this.props;
        return (
            <div className="features feature-customer">
                <Table
                    columns={columns}
                    rowKey={record => record.id}
                    dataSource={data}
                    pagination={pagination}
                    loading={loading}
                    onChange={(pagination, filters, sorter) => this.props.handleTableChanges(pagination, filters, sorter)
                    }
                />
            </div>
        )
    }
}

export default President;