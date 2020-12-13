import React, { Component } from "react";
import "./style.less";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import MenuList from "../../config/menuList";
const { SubMenu } = Menu;
export default class LeftNav extends Component {
  handleClick = () => {};
  getMenuNode = (data)=> {
    return data.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item icon={<AppstoreOutlined />} key={item.key}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={item.title}
          >
            {this.getMenuNode(item.children)}
          </SubMenu>
        );
      }
    });
  };
  render() {
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        onClick={this.handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
      >
        {this.getMenuNode(MenuList)}
        {/* <Menu.Item icon={<AppstoreOutlined />} key="1">
          <Link to="/home">首页</Link>
        </Menu.Item>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="商品">
          <Menu.Item key="5">
            <Link to="/product"> 商品管理</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/category"> 商品分类</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="用户">
          <Menu.Item key="9">权限分配</Menu.Item>
          <Menu.Item key="10">
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="11">
            <Link to="/role">用户信息</Link>
          </Menu.Item>
        </SubMenu> */}
      </Menu>
    );
  }
}
