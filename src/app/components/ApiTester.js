"use client";

import { useState } from "react";

export default function ApiTester() {
  const [result, setResult] = useState(null);

  const callGetAPI = async () => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: error.message });
    }
  };

  const callPostAPI = async () => {
    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "John", age: 30 }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: error.message });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={callGetAPI}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test GET API
        </button>
        <button
          onClick={callPostAPI}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Test POST API
        </button>
      </div>

      {result && (
        <div className="p-4 bg-gray-100 rounded">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
