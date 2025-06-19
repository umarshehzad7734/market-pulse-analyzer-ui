import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const StockChart = () => {
  // Generate fake stock data
  const data = [
    { date: '2024-06-01', price: 142.18, volume: 45000000 },
    { date: '2024-06-02', price: 148.25, volume: 52000000 },
    { date: '2024-06-03', price: 151.30, volume: 38000000 },
    { date: '2024-06-04', price: 149.85, volume: 41000000 },
    { date: '2024-06-05', price: 155.42, volume: 47000000 },
    { date: '2024-06-06', price: 158.76, volume: 39000000 },
    { date: '2024-06-07', price: 162.33, volume: 44000000 },
    { date: '2024-06-08', price: 159.91, volume: 48000000 },
    { date: '2024-06-09', price: 164.28, volume: 35000000 },
    { date: '2024-06-10', price: 167.85, volume: 42000000 },
    { date: '2024-06-11', price: 171.42, volume: 46000000 },
    { date: '2024-06-12', price: 168.73, volume: 40000000 },
    { date: '2024-06-13', price: 174.19, volume: 53000000 },
    { date: '2024-06-14', price: 179.56, volume: 48000000 },
    { date: '2024-06-15', price: 184.95, volume: 61000000 },
    { date: '2024-06-16', price: 178.42, volume: 44000000 },
    { date: '2024-06-17', price: 182.18, volume: 39000000 },
    { date: '2024-06-18', price: 176.93, volume: 42000000 },
    { date: '2024-06-19', price: 161.47, volume: 58000000 }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="text-green-400" size={24} />
          Stock Price Trend Analysis
        </CardTitle>
        <CardDescription>
          Historical price movement with ML-based trend prediction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                stroke="#9CA3AF"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                stroke="#9CA3AF"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#3B82F6"
                strokeWidth={2}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <p className="text-gray-400">Current Trend</p>
            <p className="font-semibold text-green-400">Bullish</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Volatility</p>
            <p className="font-semibold text-yellow-400">Medium</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">RSI (14)</p>
            <p className="font-semibold text-blue-400">68.4</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Confidence</p>
            <p className="font-semibold text-purple-400">94.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;
