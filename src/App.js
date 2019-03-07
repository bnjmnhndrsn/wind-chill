import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const calcChill = (windSpeed, temperature) => {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
};

const getDataWithTemperatureRange = (windSpeed) => {
    const tempMin = -20;
    const tempMax = 50;
    const result = [];
    for (let i = tempMin; i <= tempMax; i = i + 5) {
        result.push({x: i, y: calcChill(windSpeed, i)});
    }
    return result;
};

const getDataWithWindspedRange = (temp) => {
    const windMin = 3;
    const windMax = 50;
    const result = [];
    for (let i = windMin; i <= windMax; i = i + 1) {
        result.push({x: i, y: calcChill(i, temp)});
    }
    return result;
};

class App extends Component {
    constructor(){
        super();
        this.state = {
            windSpeed: 20,
            temperature: 50
        };
        
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            temperature: e.target.value
        });
    }
    
    render() {
//        const data = getDataWithTemperatureRange(this.state.windSpeed);
        const data = getDataWithWindspedRange(this.state.temperature);
        return (
            <div>
                <div>
                    <ResponsiveContainer width="50%" height={500}>
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
                            <YAxis domain={[-60, 60]} />
                            <Tooltip />
                            <Line isAnimationActive={false} type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <input style={{width: '100%'}} type="range" min="-20" max="50" value={this.state.temperature} onChange={this.onChange} />
                </div>
            </div>

  
        );
    }
}

export default App;
