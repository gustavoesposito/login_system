import { Button, Input, Row } from "antd"
import Form from "antd/lib/form"
import { Col } from "antd/lib/grid"
import React from "react"

export const Login = () => {
    return (
        <Row
        justify="center"
        align="middle"
        style={{
            height:'100vh '
        }}
        >

            <Col span={12}>
                <Form
                name="basci"
                labelCol={{span: 8}}
                wrapperCol={{span: 16 }}
                onFinish ={() => {}}
                >
                    <Form.Item
                    label= 'Email'
                    name='email'
                    >
                        <Input/>

                    </Form.Item>

                    <Form.Item
                    label= 'Password'
                    name='password'
                    >
                        <Input.Password/>

                    </Form.Item>

                    <Form.Item
                    wrapperCol={{ offset: 8, span: 16}}
                    >
                        <Button 
                        type="primary"
                        htmlType="submit"
                         >
                            Sign In

                        </Button>
                        </Form.Item>
                        </Form>
            </Col>
           
        </Row>
    )
}