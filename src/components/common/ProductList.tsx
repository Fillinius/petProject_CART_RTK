import { ProductDefault } from '../page/ProductDefault'
import { useAppSelector } from '../../store/hooks'

export function ProductList() {
  const products = useAppSelector((state) => state.products)
  // console.log(products)

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
