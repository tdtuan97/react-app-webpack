import React, {Component} from 'react';
import {Select} from 'antd';
import {
    AntCard,
    AntForm,
    AntFormItem,
    AntInput,
    AntInputNumber,
    AntInputTextArea,
    FormGroupAction, FormGroupActionBack, FormGroupActionDelete, FormGroupActionSave, FormGroupActionUpdate,
} from "../../../../layouts";

import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

const areas = [
    { label: 'Beijing', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
];

const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
};

const form = {};

const onFinish = values => {
    console.log('Received values of form:', values);
};

const handleChange = () => {
    form.setFieldsValue({ sights: [] });
};

class CustomComponent extends Component {
    render() {
        const masters = ["Chiếc", "Kiện", "Kg", "Tạ", "Tấn",]

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

        const {name, price, unit, description} = data;

        formLoading      = formLoading === true;
        const form_title = isDetail === true ? "Chi tiết bảng giá" : "Thêm bảng giá";
        return (
            <AntCard
                title={form_title}
                bordered={true}
                loading={formLoading}
            >
                <AntForm
                    className="form-center form-service"
                    layout="vertical"
                    onFinish={(data => this.props.onFinish(data))}
                    initialValues={{name: name, price: price, unit: unit, description: description}}
                >
                    <Form.List name="sights">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(prevValues, curValues) =>
                                                prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                            }
                                        >
                                            {() => (
                                                <Form.Item
                                                    {...field}
                                                    label="Sight"
                                                    name={[field.name, 'sight']}
                                                    rules={[{ required: true, message: 'Missing sight' }]}
                                                >
                                                    <Select disabled={!form.getFieldValue('area')} style={{ width: 130 }}>
                                                        {(sights[form.getFieldValue('area')] || []).map(item => (
                                                            <Option key={item} value={item}>
                                                                {item}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            )}
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            label="Price"
                                            name={[field.name, 'price']}
                                            rules={[{ required: true, message: 'Missing price' }]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add sights
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <AntFormItem
                        required={true}
                        label="Tên dịch vụ"
                        name="name"
                        value={name}
                        errors={errors.name}
                    >
                        <AntInput/>
                    </AntFormItem>
                    <AntFormItem
                        className="form-service-inline form-service-unit"
                        required={true}
                        label="Đơn vị"
                        name="unit"
                        errors={errors.unit}
                    >
                        <Select placeholder="Chọn đơn vị" className="form-service-child" >
                            {
                                masters.map((value, index, array) => {
                                    return (
                                        <Select.Option value={value} key={index}>{value}</Select.Option>
                                    )
                                })
                            }
                        </Select>
                    </AntFormItem>

                    <AntFormItem
                        label="Mô tả"
                        name="description"
                        errors={errors.description}
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