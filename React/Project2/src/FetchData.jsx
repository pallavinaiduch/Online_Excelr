import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchData;