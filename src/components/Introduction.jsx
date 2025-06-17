import React from 'react';

const Introduction = ({ totalTopics }) => (
  <>
    <div className="m-8 ">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome to React Basics
      </h2>
      <p className="text-gray-600">
        Explore React concepts, hooks, and practical examples. Click on any topic to dive deeper.
      </p>
      <div className="mt-4 text-blue-700 font-semibold">
        Total number of topics: {totalTopics}
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">New to React?</h4>
          <p className="text-gray-600 mb-4">
            Start with the basics like useState and useEffect hooks to understand fundamental React concepts.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Want to Practice?</h4>
          <p className="text-gray-600 mb-4">
            Each topic includes practical examples and code snippets you can experiment with.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Introduction;