import React, {Component} from 'react';
import {Table} from 'antd';
import {Link} from "react-router-dom";

const columns = [
    {
        title    : 'ID',
        dataIndex: 'id',
        sorter   : true,
        render   : id => <Link to={'/services/detail/' + id}>{id}</Link>,
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
        let {data, pagination, loading} = this.props;
        return (
            <div className="features feature-service">
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