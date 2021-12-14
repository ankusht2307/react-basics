import React from 'react';

function Row() {
  return (
    /**
     *
     * If we were to wrap <td>'s in div, we would get
     * errors.
     *
     * Below is the shorthand syntax of fragments, but note that
     * we can't iterate over shorthand syntax.
     *
     */
    <>
      <td>Name</td>
      <td>Ankush</td>
    </>
  );
}

export default Row;
