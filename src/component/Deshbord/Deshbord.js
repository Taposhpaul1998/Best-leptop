import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

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
    // const { investment, month, revenue, sell } = data
    return (
        <div className='rechart-conteiner'>
            <div className="line-chart">

            </div>
            <div className="bar-chart">
                <BarChart width={550} height={440} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <XAxis dataKey="month" />
                    <YAxis />
                </BarChart>
            </div>
        </div>
    );
};

export default Deshbord;