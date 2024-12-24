import React, { useState } from "react";
import axios from "axios";

function App() {
  const [urlInput, setUrlInput] = useState("");
  const [summary, setSummary] = useState(null); // To store the summary result from API

  const handleInput = (e) => {
    setUrlInput(e.target.value);
  };

  const summarize = async () => {
    try {
      console.log('Starting request with URL:', urlInput); 

      const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: urlInput, 
          lang: 'en',
          engine: '2'
        },
        headers: {
          'x-rapidapi-key': '5da98736b6msh10a5385057aeb13p19ba1ejsn3fcd21aa6a93', // Ensure the API key is loaded
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      console.log('Response Data:', response.data); // Check if the response structure is correct
      setSummary(response.data.summary || 'No summary available. Please check the URL.'); // Ensure the summary is set

    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('There was an error summarizing the article. Please check the URL and try again.');
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-300 flex items-center justify-center flex-col text-blue-600 text-xl">                                           
      <h1 className="text-3xl font-bold mb-4 -mt-[40px]">Article Summarizer</h1>

      <div className="flex items-center justify-center gap-x-2  mt-4 mb-4"> 
        <input 
          type="text" 
          placeholder="Enter Article URL" 
          className="outline-none border-2 border-gray-400 rounded-lg px-4 py-2 w-80" 
          value={urlInput} 
          onChange={handleInput} 
        />
        <button 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800" 
          onClick={summarize}
        >
          Click
        </button>
      </div>

      <div className="w-[500px] h-64 bg-gray-400 p-4 overflow-x-hidden">
        {summary ? (
          <p className="text-blue-800">{summary}</p>
        ) : (
          <p className="text-blue-500">Your summary will appear here...</p>
        )}
      </div>
    </div>
  );
}

export default App;
