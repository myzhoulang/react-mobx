import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Legend,
  Tooltip,
} from "bizcharts";

class BubbleChart extends React.Component {
  componentDidUpdate () {

  }
  render() {
    if (this.chart) {
      this.chart.forceFit(true)
    }
    const colorMap = {
      Asia: G2.Global.colors[0],
      Americas: G2.Global.colors[1],
      Europe: G2.Global.colors[2],
      Oceania: G2.Global.colors[3]
    };
    const cols = {
      LifeExpectancy: {
        alias: "人均寿命（年）"
      },
      Population: {
        type: "pow",
        alias: "人口总数"
      },
      GDP: {
        alias: "人均国内生产总值($)"
      },
      Country: {
        alias: "国家/地区"
      }
    };
    return (
      <Chart
        padding={'auto'}
        height={475}
        data={this.props.data}
        scale={cols}
        onGetG2Instance={(chart) => {
          this.chart = chart;
        }}  forceFit>
        <Tooltip showTitle={false} />
        <Axis
          name="GDP"
          label={{
            formatter: value => {
              return (value / 1000).toFixed(0) + "k";
            } // 格式化坐标轴的显示
          }}
        />
        <Axis name="LifeExpectancy" />
        <Legend reversed offsetY={-10} />
        <Geom
          type="point"
          position="GDP*LifeExpectancy"
          color={[
            "continent",
            val => {
              return colorMap[val];
            }
          ]}
          tooltip="Country*Population*GDP*LifeExpectancy"
          opacity={0.65}
          shape="circle"
          size={["Population", [4, 65]]}
          style={[
            "continent",
            {
              lineWidth: 1,
              strokeOpacity: 1,
              fillOpacity: 0.3,
              opacity: 0.65,
              stroke: val => {
                return colorMap[val];
              }
            }
          ]}
        />
      </Chart>
    );
  }
}

export default BubbleChart;
