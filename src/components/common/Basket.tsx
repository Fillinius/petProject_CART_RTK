import { log } from 'console'
import { initialData } from '../../mockData/initialData'

export function Basket() {
  const orders = initialData
  const total: number = orders.reduce((acc, order) => {
    return acc + order.count * order.price
  }, 0)
  console.log(total)

  if (!orders || orders.length == 0) 'Список покупок пуст'
  return (
    <div className="container ">
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Корзина
        </li>
        {orders.map((order) => (
          <li className=" list-group-item p-1">
            <div className="d-flex justify-content-between">
              <div className="">
                <p>{order.title}</p>
              </div>
              <div className="d-flex">
                <button className="btn btn-outline-success mx-1 px-1">
                  {order.count}
                </button>
                <button className="btn btn-outline-danger px-1">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
        <li className="list-group-item list-group-item-dark text-end">
          <div className="d-flex justify-content-between">
            <p className="m-0"> Полная стоимость заказа </p>
            <p className="m-0">{total} $</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
