import * as d3 from 'd3';
import { Component, createRef } from 'react';

class AxisHistogram extends Component {
  constructor(props) {
    super(props);
    this.histogramRef = createRef();
  }

  componentDidUpdate() {
    let { selectedData } = this.props;
    var bins = d3.bin().thresholds(40)(selectedData);

    var margin = { top: 0, right: 10, bottom: 20, left: 10 },
      width = 516 - margin.left - margin.right,
      height = 80 - margin.top - margin.bottom;

    var x = d3.scaleLinear()
      .domain([0, d3.max(bins, function (d) { return d.x1 })])
      .range([0, width]);

    var y = d3.scaleLinear()
      .domain([0, d3.max(bins, function (d) { return d.length; })])
      .range([height, 0]);

    var svg = d3.select(this.histogramRef.current)
      .html('')
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

      var bar = svg.selectAll(".bar")
        .data(bins)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

      bar.append("rect")
        .attr("x", 1)
        .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
        .attr("height", function (d) { return height - y(d.length); })
        .attr('fill', '#ffda00');
  }

  render() {
    return (
      <div style={{ margin: "16px 0" }}>
        <div ref={this.histogramRef}></div>
      </div>
    )
  }
}

export default AxisHistogram;
