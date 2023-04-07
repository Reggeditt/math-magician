import { useEffect, useState } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://type.fit/api/quotes')
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
        <div key={quote.text}>
          <p>{quote.text}</p>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quote;
