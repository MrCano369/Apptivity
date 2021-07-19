export default function DeleteModal({ active, close, title, func }) {

  return (
    <div className={"modal" + (active ? " is-active" : "")}>
      <div className="modal-background" onClick={close}></div>
      <div className="modal-card" style={{ maxWidth: "550px" }}>
        <header className="modal-card-head">
          <p className="modal-card-title">Delete {title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={close}
          ></button>
        </header>
        <section className="modal-card-body">
          <p>
            Are you sure you want to delete this activity <b>permanently</b>?
          </p>
        </section>
        <footer
          className="modal-card-foot is-justify-content-flex-end"
          style={{ padding: "10px" }}
        >
          <button className="button is-light" onClick={close}>
            Cancel
          </button>
          <button className="button is-danger" onClick={func}>
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
}
