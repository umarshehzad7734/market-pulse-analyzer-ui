import React, { useState } from 'react';
import { Upload, TrendingUp, TrendingDown, BarChart3, FileText, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import FileUpload from '@/components/FileUpload';
import StatsDisplay from '@/components/StatsDisplay';
import StockChart from '@/components/StockChart';

const Index = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true);
    setShowResults(false);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsProcessing(false);
            setShowResults(true);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Stock Market Analyzer 📊
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Serverless ML-powered stock market data analysis with real-time processing and predictive insights
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-12">
          <FileUpload onFileUpload={handleFileUpload} />
        </div>

        {/* Processing Status */}
        {isProcessing && (
          <Card className="mb-8 bg-gray-800 border-gray-700 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <Activity className="animate-spin" size={20} />
                Processing Stock Data
              </CardTitle>
              <CardDescription>
                Uploading to Azure Blob Storage and running serverless analysis...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={uploadProgress} className="mb-2" />
              <p className="text-sm text-gray-400">{uploadProgress}% complete</p>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {showResults && (
          <div className="space-y-8 animate-fade-in">
            <StatsDisplay />
            <StockChart />
          </div>
        )}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <Upload size={20} />
                Azure Blob Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Secure, scalable file storage with automatic backup and versioning</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <BarChart3 size={20} />
                ML Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Advanced machine learning algorithms for price prediction and trend analysis</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Activity size={20} />
                Serverless Functions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Auto-scaling compute with pay-per-execution pricing model</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
