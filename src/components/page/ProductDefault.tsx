import { InitialDataProp } from '../../mockData/initialData'

export function ProductDefault(product: InitialDataProp) {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.img} className="card-img-top" alt={product.img} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container mx-auto">
            <div className="row justify-content-between ">
              <div className="col-auto">
                <button className="btn btn-outline-success ">+</button>
                <button className="btn btn-outline-warning mx-1">-</button>
              </div>
              <div className="col-auto">
                <button className="btn btn-outline-info mx-1">
                  <i
                    className={`bi ${
                      product.favorite ? 'bi-heart-fill' : 'bi-heart'
                    }`}
                  ></i>
                </button>
                <button className="btn btn-outline-danger ">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
