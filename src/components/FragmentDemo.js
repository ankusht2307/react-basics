import React from 'react';
import Table from './Table';

function FragmentDemo() {
  const array = [
    { id: 1, name: 'Thor' },
    { id: 2, name: 'Iron Man' },
    { id: 3, name: 'Doctor Strange' },
    { id: 4, name: 'Hawk Eye' },
  ];
  return (
    /**
     *
     * Fragment removes the extra html element from DOM.
     *
     */
    <React.Fragment>
      {/* We can also iterate over it with key={} property. */}
      {array.map((item) => (
        <React.Fragment key={item.id}>{item.name}</React.Fragment>
      ))}
      <h1>Fragment Demo</h1>
      <p>This describes the fragment Demo Component</p>
      <Table />
    </React.Fragment>
  );
}

export default FragmentDemo;
