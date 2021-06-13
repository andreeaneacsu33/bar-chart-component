# Bar Chart React Component

This is a web component that displays a bar chart based on the data given as input.\
To start the server in the development mode, run `npm start` in the project directory and navigate to `http://localhost:3000` in your web browser.\
The page will reload if you make edits and you will also see any lint errors in the console.

## Use

The Plot is composed of two axis, AxisX and AxisY and several Bar components that are the representation of the data given as input.
You can locate these in `src/components` directory.

## Properties
|Property | Type | Description
:---: | :---: | :---:
width| number | Width of the plot in px
height| number | Height of the plot in px
xLabel| string | Label for the Ox axis
yLabel| string | Label for the Oy axis
data| array | Array of pairs containing (Ox,Oy) data

___
![Bar Chart Component](https://github.com/andreeaneacsu33/bar-chart-component/blob/master/public/bar-chart-component.png?raw=true)
