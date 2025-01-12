import { InitialDataProp } from '../../mockData/initialData'
import { favoriteProductAction, isShowModal } from '../../store/actions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ModulOrder } from '../ui/ModulOrder'

export function ProductDefault(product: InitialDataProp) {
  const dispatch = useAppDispatch()
  const isShow = useAppSelector((state) => state.modal.isShow)
  console.log(isShow)

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
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-cart-plus"></i>
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tab-index="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal Basket
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-outline-info mx-1"
                  onClick={() => dispatch(favoriteProductAction(product.id))}
                >
                  <i
                    className={`bi ${
                      product.favorite ? 'bi-heart-fill' : 'bi-heart'
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isShow && <ModulOrder />} */} {/* неработает */}
    </>
  )
}
