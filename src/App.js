import React from 'react';
import OptionsGraph from './components/OptionsGraph';
import './index.css';

const App = () => {
    // Define your contracts data here or fetch it from an API
    const contracts = [
        {
            "strike_price": 100,
            "type": "Call",
            "bid": 10.05,
            "ask": 12.04,
            "long_short": "long",
            "expiration_date": "2025-12-17T00:00:00Z"
        },
        // Add more contracts as needed
    ];

    return (
        <div className="App">
            <OptionsGraph contracts={contracts} />
        </div>
    );
};

export default App;
