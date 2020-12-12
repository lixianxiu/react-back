import React, { Component } from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import api from "../../api";
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

export default class Login extends Component {
  getDate2 = () => {
    axios
      .post("/postdata1", {
        params: {
          name: "jack",
        },
      })
      .then((res) => {
        console.log(res.data);
        debugger;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const onFinish = ({ username, password }) => {
     
      api.UserApi.login({
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        // 登陆成功 
        // token 存 sessiontorage and redux 
      });
      // this.getDate2()
      console.log("Success:", username);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div>
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <h1>welcome our coummunity!</h1>
            <h2>please login your account</h2>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                  {
                    pattern: /^[0-9a-zA-Z_]{3,11}$/,
                    message: "3-12位，数字字母下划线组成",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please input your password!",
                  },
                  {
                    pattern: /^[0-9a-zA-Z_]{3,11}$/,
                    message: "3-12位，数字字母下划线组成",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    );
  }
}
