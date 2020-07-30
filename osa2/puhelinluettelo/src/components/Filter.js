import React from 'react'

const Filter = ({filterInput,filterInputChange}) =>
  (
    <div>
      <input value={filterInput} onChange={filterInputChange}/>
    </div>
  )

export default Filter