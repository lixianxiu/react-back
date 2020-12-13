import React, { Component } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link, Redirect, Route, Switch } from "react-router-dom";

import UserUtils from "../../utils/storageUtils";

//2 级路由
import Product from "../Product/Product";
import Home from "../Home/Home";
import Role from "../Role/Role";
import Category from "../Category/Category";
import UserCom from "../User/User";
import "./style.less";

import LeftNav from "../../components/LeftNav/LeftNav";
const { Header, Footer, Sider, Content } = Layout;

//component import
// import Head from "../../components/Head/Head";
// import LeftNav from "../../components/LeftNav/LeftNav";
export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const user = UserUtils.getUser();
    if (!user.id) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Link to="/">
            <h1>react 后台系统</h1>
          </Link>
          <LeftNav />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                style: {
                  margin: "0 16px",
                },
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={UserCom} />
              <Route path="/product" component={Product} />
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
