import React, { useState, useCallback } from 'react';
import { Upload, File, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        setUploadedFile(file);
        onFileUpload(file);
      }
    }
  }, [onFileUpload]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      onFileUpload(file);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="text-blue-400" size={24} />
          Upload Stock Data
        </CardTitle>
        <CardDescription>
          Upload your CSV file to Azure Blob Storage for serverless processing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-blue-400 bg-blue-400/10'
              : 'border-gray-600 hover:border-gray-500'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {uploadedFile ? (
            <div className="flex items-center justify-center gap-3 text-green-400">
              <CheckCircle size={24} />
              <div>
                <p className="font-semibold">{uploadedFile.name}</p>
                <p className="text-sm text-gray-400">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          ) : (
            <>
              <Upload className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-lg font-semibold mb-2">Drop your CSV file here</p>
              <p className="text-gray-400 mb-4">
                Or click to browse your files
              </p>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
              />
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <File size={18} className="mr-2" />
                  Select CSV File
                </label>
              </Button>
            </>
          )}
        </div>
        
        <div className="mt-4 text-sm text-gray-400">
          <p>• Supported format: CSV files with columns: Date, Open, High, Low, Close, Volume</p>
          <p>• Maximum file size: 50 MB</p>
          <p>• Files are automatically encrypted and stored in Azure Blob Storage</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUpload;
