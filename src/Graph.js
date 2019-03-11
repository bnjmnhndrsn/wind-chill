import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Graph ({data}) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis domain={[-60, 60]}  width={30} />
                <Tooltip />
                <Line isAnimationActive={false} type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}