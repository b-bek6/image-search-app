
import './App.css'
import Search from './component/Search'
import { useSelector } from 'react-redux'
import Items from './component/Items'
import SearchItems from './component/SearchItems'
function App() {
  const search = useSelector(store => {return store.search?.value})
  return (
    <>
     <div>
      <Search />
      {
        search == ''
        ?
        <Items />
        :
        <SearchItems />
      }

     </div>
    </>
  )
}

export default App
