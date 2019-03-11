import React, { Component } from 'react';

import Graph from './Graph';
import Windchill from './Windchill';
import NumberInput from './NumberInput';

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
        const dataSet = getDataWithWindspedRange(this.state.temperature);
        const windChill = calcChill(this.state.windSpeed, this.state.temperature);
        return (
            <div className="container">
                <div className="left-col">
                    <div className="cell">
                        <NumberInput label="Temperature" value={this.state.temperature} suffix="° F"  />
                    </div>
                    <div className="cell">
                        <NumberInput label="Windspeed" value={this.state.windSpeed} suffix="mph" />
                    </div>
                </div>
                <div className="right-col">
                    <div className="cell">
                        <Windchill value={windChill} />
                    </div>
                    <div className="cell">
                        <Graph data={dataSet} />
                    </div>
                </div>
            </div>

  
        );
    }
}

export default App;
