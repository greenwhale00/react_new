import TopBanner from '../pages/TopBanner';
import ListTest from '../pages/ListTest'
import './basic.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);

  // axios

  //JSON.parse()


  //console.log(Object(data[0]).id)
  //async await ??


  return (
    <div>

      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>)
      }

    </div>
  )
}

export default App;