import React, {Component} from 'react';

class PieChart extends Component {
    render() {
        return (
            <div className="ChartBlock">
                <div className="ChartPie" style={{width: '450px'}}>
                    <svg className="ChartPieChunk" width="440px" height="440px" viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <g id="overlay">
                                <rect x="219" y="20" height="200" width="2" fill="#FFF"/>
                                <g transform="translate(210, 10)">
                                    <path fill="#000"/>
                                </g>
                            </g>
                        </defs>
                        <mask id="wedge-mask" fill="white">
                            <path transform="translate(20, 20)" d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z" fillRule="nonzero"/>
                        </mask>
                        <circle cx="220" cy="220" r="200" fill="#EFEFEF" stroke="#E3E3E3" strokeWidth="1"/>
                        {/*<Slice*/}
                        {/*    slices={this.state.slices}*/}
                        {/*/>*/}
                        <use xlinkHref="#overlay" transform="rotate(19, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(63.7143, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(108.7143, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(153.7143, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(198.7143, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(243.7143, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(288.7143, 220, 220)"/>
                        <use xlinkHref="#overlay" transform="rotate(333.7143, 220, 220)"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export {PieChart};
