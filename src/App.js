import React from "react";
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

function App() {
    return (
        <Plot
            maxWidth={400}
            maxHeight={300}
            xLabel={'Day'}
            yLabel={'$'}
            data={data}
        />
    )
}

export default App;
