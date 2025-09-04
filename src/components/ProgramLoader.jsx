import React, { useState, useEffect, Suspense } from 'react';
import { programRegistry } from '../data/programRegistry';

const ProgramLoader = ({ programId, programProps }) => {
  const [ProgramComponent, setProgramComponent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!programId || !programRegistry[programId]) {
      setProgramComponent(null);
      return;
    }

    setLoading(true);
    setError(null);

    programRegistry[programId]()
      .then((module) => {
        const Component = module.default;
        setProgramComponent(() => Component);
      })
      .catch((err) => {
        console.error(`Failed to load program ${programId}:`, err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [programId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">Loading program...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-red-500 dark:text-red-400">
        <span className="text-lg font-medium">Failed to load program</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{error.message}</span>
      </div>
    );
  }

  if (!ProgramComponent) {
    return null;
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">Rendering program...</span>
      </div>
    }>
      <ProgramComponent {...programProps} />
    </Suspense>
  );
};

export default ProgramLoader;