import React from 'react';
import { Database } from 'lucide-react';

const PropsDemo = () => (
  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
    <div className="flex items-center space-x-4 mb-6">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Database className="w-7 h-7 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Props</h2>
    </div>
    <p className="text-gray-700 text-lg">Pass data and event handlers to child components</p>
    {/* Place example code or explanation here */}
  </div>
);

export default PropsDemo;