import React, {Component} from "react";
import {Icon,Tabs, Popover, List, Avatar} from "antd";
import {observer} from "mobx-react";
import {observable, action} from "mobx";

const TabPane = Tabs.TabPane;

export default class Notice extends Component {

  render () {
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];
    const tab1 = (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    )
    const noticeContent = (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">{tab1}</TabPane>
        <TabPane tab="Tab 2" key="2">Tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
      </Tabs>
    )
    return (
      <Popover placement="topLeft" content={noticeContent} trigger="click">
        <a href="/" className="global-header-index-action">
          <Icon type="bell"></Icon>
        </a>
      </Popover>
    )

  }
}