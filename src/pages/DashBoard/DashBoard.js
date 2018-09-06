import React, {Component} from "react";
import {Card, Row, Col, Tooltip} from "antd";

import NumberInfo from '../../components/NumberInfo';
import './DashBoard.css';

export default class DashBoard extends Component {
  constructor (arg) {
    super(arg)
  }

  render () {
    return (
      <Row gutter={24}>
        <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{marginBottom: 24}}>
          <Card title="活动实时交易情况" bordered={false}>
            <Row>
              <Col md={6} sm={12} xs={24}>
                <NumberInfo subTitle={'今日交易总额'} total={'124,543,233'} suffix={'元'} />
              </Col>
              <Col md={6} sm={12} xs={24}>
                <NumberInfo subTitle={'销售目标完成率'} total={'92%'} />
              </Col>
              <Col md={6} sm={12} xs={24}>
                <NumberInfo subTitle={'活动剩余时间'} total={'00:00:00'} />
              </Col>
              <Col md={6} sm={12} xs={24}>
                <NumberInfo subTitle={'每秒交易总额'} total={'234'} suffix={'元'} />
              </Col>
            </Row>

            <div className='mapChart'>
              <Tooltip title="等待后期实现">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                  alt="map"
                />
              </Tooltip>
            </div>
          </Card>
        </Col>
        <Col xl={6} lg={24} md={24} sm={24} xs={24} >
          <Card title="活动情况预测" style={{ marginBottom: 24 }} bordered={false}>
          </Card>

          <Card title="活动情况预测" style={{ marginBottom: 24 }} bordered={false}>
          </Card>
        </Col>
      </Row>
    )
  }
}
