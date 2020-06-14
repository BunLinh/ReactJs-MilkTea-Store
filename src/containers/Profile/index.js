import React, { useEffect } from 'react';
import { Skeleton, Row, Form, Button, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import classes from './styles.module.css'
import FormInput from '../../components/FormItem/FormInput';
import FormDatepicker from '../../components/FormItem/FormDatepicker';
import FormTextArea from '../../components/FormItem/FormTextArea';
import FormUploadImage from '../../components/FormItem/FormUploadImage';
import enhanceProfile from './enhanceProfile';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 24,
            offset: 5,
        },
    },
};

const Profile = (props) => {
    const { getFullProfile, values, profile: { fullName } } = props;
    
    useEffect(() => {
        getFullProfile()
        console.log(fullName + " values ./container./Profile");       
    }, [getFullProfile])

    const { dob, imageUrl } = values;

    return (
        <div className={classes.form__container}>
            <p className={classes.title__profile}>Welcome <span style={{ fontWeight: '500', color: 'blue' }}>
                {fullName || 'you'} to my MilkTea profile
            </span></p>
            <Skeleton loading={props.loading}>
                <Row gutter={32} style={{ marginTop: '20px' }}>
                    <Col span={16}>
                        <Form
                            id='formProfile'
                            onFinish={props.handleSubmit}
                            layout='horizontal'
                            {...formItemLayout}
                        >
                            <FormInput name='fullName' required label='Full name' />
                            <FormInput name='email' label='email' disabled={true} />
                            <FormInput name='address' required label='Address' />
                            <FormInput name='role' required label='Role' />
                            <FormDatepicker
                                name='dob'
                                required
                                label='Day of birth'
                                value={dob}
                                onChange={props.setFieldValue}
                            />
                            <FormTextArea
                                name='note'
                                label='Note'
                            />
                            <FormUploadImage
                                value={imageUrl}
                                name='imageUrl'
                                label='Photo'
                                setFieldValue={props.setFieldValue}
                            />
                            <Form.Item {...tailFormItemLayout}>
                                <Row justify='space-between' gutter={64}>
                                    <Col span={12}>
                                        <Button block onClick={() => props.resetForm()}>
                                            Reset
                                        </Button>
                                        </Col>
                                        <Col span={12}>
                                        <Button form='formProfile' type='primary' block htmlType='submit'>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={8}>
                        <div className={classes.avatar__container}>
                            <div>
                                <Avatar
                                    src={imageUrl}
                                    className={classes.avatar}
                                    size={128}
                                    shape='square'
                                    icon={<UserOutlined />}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Skeleton>
        </div>
    )
}
export default enhanceProfile(Profile);