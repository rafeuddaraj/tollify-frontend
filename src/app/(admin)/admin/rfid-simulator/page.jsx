"use client";
import { useState } from "react";

export default function NFCReader() {
  const [nfcData, setNfcData] = useState(null);
  const [error, setError] = useState(null);

  const startNFC = async () => {
    try {
      if ("NDEFReader" in window) {
        const ndef = new NDEFReader();
        await ndef.scan(); // Start scanning for NFC tags

        console.log("NFC scan started successfully.");

        // Event listener for reading NFC tags
        ndef.addEventListener("reading", (event) => {
          const decoder = new TextDecoder();
          const records = event.message.records.map((record) =>
            decoder.decode(record.data)
          );
          setNfcData(records);
        });

        // Handle errors
        ndef.addEventListener("error", (event) => {
          setError("Error reading NFC tag.");
        });
      } else {
        setError("Web NFC API is not supported in your browser.");
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">NFC Reader</h1>

      <button
        onClick={startNFC}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start NFC Scan
      </button>

      {nfcData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">NFC Data:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(nfcData, null, 2)}
          </pre>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
