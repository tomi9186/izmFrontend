import React, { useState, useEffect } from 'react';

const Exchange = () => {
    const [currencyRates, setCurrencyRates] = useState({});

    useEffect(() => {
        fetch('https://api.frankfurter.dev/v1/latest')
            .then(response => response.json())
            .then(data => setCurrencyRates(data));
    }, []);

    if (!currencyRates.rates) return <p>Učitavanje...</p>;

    return (
        <div className="container blog">
            <h1>Exchange Rates</h1>
            <div>
                {Object.keys(currencyRates.rates).map(currency => (
                    <p key={currency}>
                        <strong>{currency}:</strong> {currencyRates.rates[currency]}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Exchange;
