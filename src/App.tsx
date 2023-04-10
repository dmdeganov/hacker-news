import React from 'react';

const App = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      {arr.map(number => (
        <div>{number}</div>
      ))}
    </>
  );
};

export default App;
