
import './App.css'
import SearchNav from './component/SearchNav'
import { useSelector } from 'react-redux'
import Items from './component/Items'
import SearchItems from './component/SearchItems'
function App() {
  // Get Search value from redux store 
  const search = useSelector(store => {return store.search?.value})
  return (
    <>
     <div>
      <SearchNav />
      {/* if search doesn't have value it will use items component else it will use SearchItems */}
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
