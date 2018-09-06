import React, {Component} from "react";
import {Avatar, Button, Icon, Layout} from "antd";
import userAvatar from "../../assets/images/user.png";

const {Header} = Layout;

export default class HeaderView extends Component{
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Header id="header">
        <div className="global-header-index-header">
          <Icon
            className="trigger"
            type={this.collapsed ? 'menu-unfold' : 'menu-fold'}
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
    )
  }
}