import React from 'react'
import d3 from 'd3'
import TextImage from './text-image'

class Vertex extends React.Component {
  constructor(props) {
    super(props);
    const {x, y} = props;
    this.state = {
      x0: x,
      y0: y,
    };
  }

  componentWillReceiveProps() {
    const {x, y} = this.props;
    this.setState({
      x0: x,
      y0: y,
    });
  }

  componentDidMount() {
    this.transition();
  }

  componentDidUpdate() {
    this.transition();
  }

  render() {
    const {d} = this.props;
    const {x0, y0} = this.state;
    const {name, color} = d;
    return (
      <g
          ref="vertex"
          transform={`translate(${x0},${y0})`}
          onClick={::this.handleClick}
          style={{cursor: 'pointer'}}>
        <rect
            fill="none"
            stroke={color}
            strokeWidth="2"
            width="150"
            height="20"
            x="-75"
            y="-10"
            rx="5"/>
        <TextImage
            text={name}
            fontSize="10"
            fill={color}/>
      </g>
    );
  }

  handleClick() {
  }

  transition() {
    const {x, y} = this.props;
    d3.select(this.refs.vertex)
      .transition()
      .duration(1000)
      .attr('transform', `translate(${x},${y})`);
  }
}

export default Vertex
