import { useEffect, useState } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.api-ninjas.com/v1/quotes?category=computers&&limit=1', {
      method: 'GET',
      headers: {
        'X-API-Key': 'OAcvP3F39QWUffY523tlRg==3Y15nTus6njhSQ1w',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setQuotes(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Quote</h1>
      {quotes.map((quote) => (
        <div key={quote.quote}>
          <p>{quote.quote}</p>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quote;
