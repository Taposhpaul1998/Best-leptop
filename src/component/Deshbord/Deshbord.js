import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Deshbord.css'

const Deshbord = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const loadedData = data.map(item => {
                    const itemData = {
                        investment: item.investment,
                        month: item.month,
                        revenue: item.revenue,
                        sell: item.sell
                    };
                    return itemData;
                })
                setData(loadedData);
            })

    }, [])
    return (
        <div className='rechart-conteiner'>
            <div className="line-chart">
                <LineChart width={630} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className="bar-chart">
                <BarChart width={550} height={440} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </BarChart>
            </div>
        </div>
    );
};

export default Deshbord;