import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const StatsDisplay = () => {
  const stats = [
    {
      title: 'Average Price',
      value: '$157.32',
      change: '+2.4%',
      trend: 'up',
      icon: DollarSign,
      description: 'Mean closing price over analyzed period'
    },
    {
      title: 'Minimum Price',
      value: '$142.18',
      change: '-8.7%',
      trend: 'down',
      icon: TrendingDown,
      description: 'Lowest recorded closing price'
    },
    {
      title: 'Maximum Price',
      value: '$184.95',
      change: '+12.3%',
      trend: 'up',
      icon: TrendingUp,
      description: 'Highest recorded closing price'
    },
    {
      title: 'Predicted Next Value',
      value: '$161.47',
      change: '+2.6%',
      trend: 'up',
      icon: Target,
      description: 'ML-generated prediction for next trading day'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <stat.icon size={16} className="text-gray-400" />
              {stat.title}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsDisplay;
