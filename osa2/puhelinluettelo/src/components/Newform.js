import React from 'react'

const Newform = ({nameInput, nameInputChange, 
    numberInput, numberInputChange, addButtonClick}) => 
    (
      <form>
        <div>
          Add new contact: 
          <input value={nameInput} onChange={nameInputChange}/>
          <input value={numberInput} onChange={numberInputChange}/>
        </div>
        <div>
          <button type="submit" onClick={addButtonClick}>add</button>
        </div>
      </form>
    )  

export default Newform