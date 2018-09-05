import React, { Component } from 'react';
import { runInAction } from 'mobx';
import { observer } from "mobx-react";
import { Layout, Menu, Icon, Button, Avatar } from "antd";

import logo from './assets/svg/logo.svg';
import userAvatar from './assets/images/user.png';
import store from './store/store';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

@observer
class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout>
        <Sider
          width={256}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="sider-menu-index-logo" key="logo" id="logo">
            <img src={logo} alt="logo" />
            <h1>Ant Design Pro</h1>
          </div>

          <Menu
            style={{ padding: "16px 0", width: "100%"}}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>实时监控</span></span>}>
              <Menu.Item key="1">
                <span className="nav-text">风控大盘</span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="solution" /><span>策略中心</span></span>}>
              <Menu.Item key="2">
                <span className="nav-text">业务配置</span>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" title={<span><Icon type="team" /><span>管理中心</span></span>}>
              <Menu.Item key="3">
                <span className="nav-text">产品管理</span>
              </Menu.Item>

              <Menu.Item key="8">
                <span className="nav-text">用户管理</span>
              </Menu.Item>

              <Menu.Item key="9">
                <span className="nav-text">角色管理</span>
              </Menu.Item>

              <Menu.Item key="10">
                <span className="nav-text">登录历史</span>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" title={<span><Icon type="deployment-unit" /><span>模型管理</span></span>}>
              <Menu.Item key="4">
                <span className="nav-text">订单记录</span>
              </Menu.Item>

              <Menu.Item key="7">
                <span className="nav-text">数据统计</span>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub5" title={<span><Icon type="database" /><span> 数据中心</span></span>}>
              <Menu.Item key="5">
                <span className="nav-text">风控报告</span>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub6" title={<span><Icon type="nteration" /><span> 控制中心</span></span>}>
              <Menu.Item key="6">
                <span className="nav-text">进件管理</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header id="header">
            <div className="global-header-index-header">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />

              <div className="global-header-index-right">
                <a href="#" className="global-header-index-action">
                  <Icon type="question-circle"></Icon>
                </a>

                <a href="#" className="global-header-index-action">
                  <Icon type="bell"></Icon>
                </a>

                <span className="global-header-index-action">
                  <Avatar size="small" className="global-header-index-avatar" src={userAvatar} alt=""/>
                  <span>Serati Ma</span>
                </span>
                <Button size="small" style={{margin: '0 8px'}}>English</Button>
              </div>
            </div>
            
          </Header>
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
              content
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Ant Design @2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>  
    );
  }
}

export default App;
