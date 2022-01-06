import { useState } from 'react';
import './common.scss';
import AddNumberRoot from './Components/AddNumberRoot.js';
import DisplayNumberRoot from './Components/DisplayNumberRoot.js';

function App() {

  const [number, setNumber] = useState(10)

  const onChange = (e) => {
    setNumber(Number(e.target.value));
  }
  const onClick = () => {
      let newNumber = number;
      newNumber++;
      setNumber(newNumber);
  }

  // 테스트 코드
  console.log(number);

  return (
    <div className="App">
      <h1>Root</h1>

      <AddNumberRoot number={ number } onChange={ onChange } onClick={ onClick } />

      <DisplayNumberRoot number={ number } />
    </div>
  );
}

export default App;
