import { Button, Input, Row, message} from "antd"
import Form from "antd/lib/form"
import { Col } from "antd/lib/grid"
import React from "react"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useLocation } from "react-router-dom"

export const Login = () => {
    const auth = useAuth()
    const history =  useLocation()

   async  function onFinish (values: {email: string, password:string}) {

    try{
   await auth.authenticate(values.email, values.password)

   
    } catch (error){
      message.error('Invalid email or password')
    }
   }

    return (
        <Row
        justify ="center"
        align="middle"
    
        style={{
            height:'100vh '
        }}
        >

            <Col span={20}>
                <Form
                name="bascic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16 }}
                onFinish ={onFinish}
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