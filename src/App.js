import React, {Component} from "react";
import Plot from "./components/Plot";

const data = [
    ["Mon", 20],
    ["Tue", 14],
    ["Wed", 12],
    ["Thu", 4],
    ["Fri", 5],
    ["Sat", 18],
    ["Sun", 0],
];

class App extends Component{
    render() {
        return (
            <Plot
                maxWidth={450}
                maxHeight={350}
                xLabel={'Day'}
                yLabel={'km'}
                data={data}
            />
        )
    }
}

export default App;
