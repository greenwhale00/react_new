import TopBanner from './pages/TopBanner';
import './basic.css';

const DATA = [
  { id: 1, name: '김혜림', age: 7, sleep: true },
  { id: 2, name: '주혜림', age: 7, sleep: true },
  { id: 3, name: '윤혜림', age: 7, sleep: true }
]


const List = () => {
  return (

    <ul>
      {DATA.map(it => <li>{it.name}</li>)}
    </ul>


  )

}


const App = () => {
  return (
    <>

      <List />
    </>
  )
}

export default App;