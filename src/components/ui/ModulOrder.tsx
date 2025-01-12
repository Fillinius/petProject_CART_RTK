export function ModulOrder() {
  return (
    <div
      className="modal fade"
      tab-index="-1"
      id="showModal"
      aria-labelledby="showModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="showModal">
              Modal basket
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you really want buy.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
