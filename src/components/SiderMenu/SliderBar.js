import React, {Component} from 'react';
import {Layout} from "antd";
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {Link} from "react-router-dom";


import BaseMenu from './BaseMenu';
import logo from "../../assets/svg/logo.svg";

const {Sider} = Layout

@observer
class SliderBar extends Component{
  constructor (arg) {
    super(...arg)
  }

  @computed get collapsed () {
    return this.props.collapsed
  }

  render () {
    return (
      <Sider
        width={256}
        trigger={null}
        collapsible
        collapsed={this.collapsed}
      >
        <div className="sider-menu-index-logo" key="logo" id="logo">
          <Link to='/'>
            <img src={logo} alt="logo" />
            <h1>孚临风控商户中心</h1>
          </Link>
        </div>
        <BaseMenu />
      </Sider>
    )
  }
}
export default SliderBar;