import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const calcChill = (windSpeed, temperature) => {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
};

const getDataWithTemperatureRange = (windSpeed) => {
    const tempMin = -20;
    const tempMax = 100;
    const result = [];
    for (let i = tempMin; i <= tempMax; i = i + 5) {
        result.push({x: i, y: calcChill(windSpeed, i)});
    }
    return result;
};

const getDataWithWindspedRange = (temp) => {
    const windMin = 0;
    const windMax = 60;
    const result = [];
    for (let i = windMin; i <= windMax; i = i + 2) {
        result.push({x: i, y: calcChill(i, temp)});
    }
    return result;
};

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];


class App extends Component {
    constructor(){
        super();
        this.state = {
            windSpeed: 20,
            temperature: 50
        };
    }
    render() {
//        const data = getDataWithTemperatureRange(this.state.windSpeed);
        const data = getDataWithWindspedRange(this.state.temperature);
        return (
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        );
    }
}

export default App;
