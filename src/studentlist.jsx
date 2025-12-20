import React, { useState, useEffect } from 'react';

function StudentList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBinaryData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:3001/students');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // *** यहाँ हम डेटा को ArrayBuffer फॉर्मेट में पढ़ रहे हैं ***
        const arrayBuffer = await response.arrayBuffer(); 
        
        // एक ArrayBuffer को सीधे कंसोल में दिखाना मुश्किल है।
        // इसे एक Uint8Array में बदलें ताकि आप बाइट्स को देख सकें।
        const bytes = new Uint8Array(arrayBuffer);

        console.log("ArrayBuffer object:", arrayBuffer);
        console.log("Uint8Array (bytes):", bytes);
        console.log("Number of bytes received:", bytes.length);

        // यहाँ हम बाइट्स के पहले 50 मानों को दिखा रहे हैं।
        console.log("First 50 bytes:", bytes.slice(0, 50));
        
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBinaryData();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>लोड हो रहा है...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>एरर: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>बाइनरी डेटा सफलतापूर्वक प्राप्त हुआ</h2>
      <p>बाइनरी डेटा को सीधे वेब पेज पर नहीं दिखाया जा सकता।</p>
      <p>कृपया ब्राउज़र के **कंसोल** (डेवलपर टूल्स) में **`Uint8Array (bytes)`** को देखें।</p>
    </div>
  );
}

export default StudentList;