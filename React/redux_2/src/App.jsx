import './App.css'
import ProductList from './components/ProductList'
import UserList from './components/UserList'

const App = () => {
  return (

    <div>
          <div>Fetch Example using redux toolkit</div>
          <UserList/>
          <hr />
          <ProductList/>

    </div>
  )
}

export default App