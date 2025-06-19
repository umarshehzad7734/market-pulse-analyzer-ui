
import { Brain, Cloud, Zap, Shield, BarChart3, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced LSTM neural networks for accurate stock price prediction and trend analysis'
    },
    {
      icon: Cloud,
      title: 'Azure Cloud',
      description: 'Fully serverless architecture leveraging Azure Functions and Blob Storage'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast data processing with automatic scaling based on demand'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encrypted storage and secure API endpoints'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive technical indicators including RSI, MACD, and Bollinger Bands'
    },
    {
      icon: Cpu,
      title: 'Auto-scaling',
      description: 'Intelligent resource allocation that scales from zero to handle any workload'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Serverless ML Stock Analyzer
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A cutting-edge financial analysis platform powered by Azure serverless computing and 
            machine learning algorithms. Process thousands of stock data points in seconds with 
            enterprise-grade reliability and security.
          </p>
        </div>

        {/* Architecture Overview */}
        <Card className="bg-gray-800 border-gray-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Cloud className="text-blue-400" />
              Serverless Architecture
            </CardTitle>
            <CardDescription className="text-lg">
              Built on Microsoft Azure with pay-per-execution pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Data Pipeline</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• CSV Upload to Azure Blob Storage</li>
                  <li>• Event-triggered data validation</li>
                  <li>• Parallel processing with Azure Functions</li>
                  <li>• Real-time anomaly detection</li>
                  <li>• Automated data cleansing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">ML Processing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• LSTM neural network training</li>
                  <li>• Technical indicator calculations</li>
                  <li>• Price prediction algorithms</li>
                  <li>• Risk assessment models</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className="text-blue-400" size={24} />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Specifications</CardTitle>
            <CardDescription>
              Performance metrics and system capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-green-400">Performance</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Sub-second response times</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• 10M+ records processed daily</li>
                  <li>• Auto-scaling to 1000+ instances</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-yellow-400">Security</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• AES-256 encryption at rest</li>
                  <li>• TLS 1.3 encryption in transit</li>
                  <li>• OAuth 2.0 authentication</li>
                  <li>• GDPR compliant data handling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-400">Analytics</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• 15+ technical indicators</li>
                  <li>• Multi-timeframe analysis</li>
                  <li>• Pattern recognition AI</li>
                  <li>• Risk-adjusted predictions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
