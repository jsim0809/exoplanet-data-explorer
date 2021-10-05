import * as d3 from 'd3';
import { Component, createRef } from 'react';

class TheMainGraph extends Component {
    constructor(props) {
        super(props);
        this.mainGraphRef = createRef();
    }

    componentDidMount() {
        this.drawGraph();
    }

    componentDidUpdate() {
        this.drawGraph();
    }

    drawGraph() {
        let { selectedXData, selectedYData } = this.props;

        let data = [];
        let size = selectedXData.length;

        for (let i = 0; i < size; i++) {
            data.push({
                x: selectedXData[i],
                y: selectedYData[i]
            })
        }

        var margin = { top: 20, right: 60, bottom: 20, left: 60 },
            width = 1072 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        var x = d3.scaleLinear()
            .domain([d3.min(data, function (d) { return d.x }), d3.max(data, function (d) { return d.x })])
            .range([0, width]);

        var y = d3.scaleLinear()
            .domain([d3.min(data, function (d) { return d.y }), d3.max(data, function (d) { return d.y })])
            .range([height, 0]);

        var svg = d3.select(this.mainGraphRef.current)
            .html('')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(d.x); })
            .attr("cy", function (d) { return y(d.y); })
            .attr("r", 2.5)
            .style("fill", "#ffda00")
    }

    render() {
        return (
            <div style={{ margin: "16px 0" }}>
                <div ref={this.mainGraphRef}></div>
            </div>
        )
    }
}

export default TheMainGraph;
