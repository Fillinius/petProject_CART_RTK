import { log } from 'console'
import { initialData } from '../../mockData/initialData'
import { ProductDefault } from '../page/ProductDefault'

export function ProductList() {
  const products = initialData
  if (!products) return 'Something twrong'
  return (
    <div className="container mx-auto p-2">
      <div className="row justify-content-between">
        {products.map((product) => (
          <div key={product.id} className="col-auto m-1">
            <ProductDefault {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}
