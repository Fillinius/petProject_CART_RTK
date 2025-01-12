import { Provider } from 'react-redux'
import { Basket } from './common/Basket'
import { ProductList } from './common/ProductList'
import { NavBar } from './ui/Navbar'
import { store } from '../store/store'
import { ModulOrder } from './ui/ModulOrder'

export function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Provider store={store}>
        <ProductList />
        <Basket />
        <ModulOrder />
      </Provider>
    </div>
  )
}
