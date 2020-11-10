import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  // state
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // setting default color
  const [list, setList] = useState(new Values('#00ffff').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }   
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#00ffff'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit' title="Submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {          
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}              
            />
          )
        })}
      </section>
    </>
  );
}

export default App;
