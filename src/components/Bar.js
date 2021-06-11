import React, {Component} from 'react';
import {getHexColor} from "../helpers";

class Bar extends Component {
    render() {
        const {x, y, width, height, index, label, xAxisY} = this.props;
        return (
            <g key={index}>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={getHexColor()}
                />
                <text x={x + 16} y={xAxisY + 16} textAnchor="middle">
                    {label}
                </text>
            </g>
        );
    }
}

export default Bar;
