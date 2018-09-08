import React, {Component} from 'react';

import SliderBar from './SliderBar';
console.log(SliderBar)

class SiderMenu extends Component{
  constructor (arg) {
    super(...arg);
  }

  render () {
    return (
      <SliderBar {...this.props} />
    )
  }
}

export default SiderMenu;