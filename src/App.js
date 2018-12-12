import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, AreaSeries} from 'react-vis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <XYPlot
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <AreaSeries
               color={'#37154e'}
               data={[
                 {x: 1, y: 10},
                 {x: 2, y: 5},
                 {x: 3, y: 15}
               ]}/>
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default App;
