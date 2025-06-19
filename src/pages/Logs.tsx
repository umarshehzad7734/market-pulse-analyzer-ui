
import { useState } from 'react';
import { CheckCircle, XCircle, Clock, Activity, FileText, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Logs = () => {
  const [logs] = useState([
    {
      id: '1',
      timestamp: '2024-06-19 14:30:25',
      function: 'stock-data-processor',
      status: 'success',
      duration: '2.3s',
      message: 'Successfully processed AAPL stock data (500 records)',
      details: 'Calculated moving averages, RSI, and MACD indicators'
    },
    {
      id: '2',
      timestamp: '2024-06-19 14:28:12',
      function: 'ml-prediction-engine',
      status: 'success',
      duration: '4.7s',
      message: 'Generated price predictions for next 5 trading days',
      details: 'Used LSTM model with 94.2% accuracy'
    },
    {
      id: '3',
      timestamp: '2024-06-19 14:25:08',
      function: 'blob-storage-uploader',
      status: 'success',
      duration: '1.1s',
      message: 'File uploaded: market-data-20240619.csv (2.4 MB)',
      details: 'Stored in container: stock-data-raw'
    },
    {
      id: '4',
      timestamp: '2024-06-19 14:22:45',
      function: 'data-validator',
      status: 'warning',
      duration: '0.8s',
      message: 'Data validation completed with 2 warnings',
      details: '2 missing volume entries filled with interpolated values'
    },
    {
      id: '5',
      timestamp: '2024-06-19 14:20:33',
      function: 'stock-data-processor',
      status: 'error',
      duration: '0.5s',
      message: 'Processing failed: Invalid CSV format',
      details: 'Column "Close Price" not found in uploaded file'
    },
    {
      id: '6',
      timestamp: '2024-06-19 14:18:17',
      function: 'anomaly-detector',
      status: 'success',
      duration: '3.2s',
      message: 'Anomaly detection completed - 0 outliers found',
      details: 'Analyzed 1000 data points using isolation forest'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="text-green-400" size={16} />;
      case 'error':
        return <XCircle className="text-red-400" size={16} />;
      case 'warning':
        return <Clock className="text-yellow-400" size={16} />;
      default:
        return <Activity className="text-blue-400" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-900 text-green-300 border-green-700';
      case 'error':
        return 'bg-red-900 text-red-300 border-red-700';
      case 'warning':
        return 'bg-yellow-900 text-yellow-300 border-yellow-700';
      default:
        return 'bg-blue-900 text-blue-300 border-blue-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <FileText className="text-blue-400" />
            Function Execution Logs
          </h1>
          <p className="text-gray-400">
            Real-time monitoring of serverless function executions and system events
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Executions</p>
                  <p className="text-2xl font-bold text-blue-400">1,247</p>
                </div>
                <Activity className="text-blue-400" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-green-400">94.2%</p>
                </div>
                <CheckCircle className="text-green-400" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Avg Duration</p>
                  <p className="text-2xl font-bold text-purple-400">2.1s</p>
                </div>
                <Clock className="text-purple-400" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Data Processed</p>
                  <p className="text-2xl font-bold text-yellow-400">47.3 GB</p>
                </div>
                <Database className="text-yellow-400" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logs List */}
        <div className="space-y-4">
          {logs.map((log) => (
            <Card key={log.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(log.status)}
                    <div>
                      <h3 className="font-semibold text-white">{log.function}</h3>
                      <p className="text-sm text-gray-400">{log.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(log.status)}>
                      {log.status}
                    </Badge>
                    <span className="text-sm text-gray-400">{log.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{log.message}</p>
                <p className="text-sm text-gray-500">{log.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Logs;
