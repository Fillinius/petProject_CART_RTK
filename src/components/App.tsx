import { Basket } from './common/Basket'
import { ProductList } from './common/ProductList'
import { NavBar } from './ui/Navbar'

export function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ProductList />
      <Basket />
    </div>
  )
}
