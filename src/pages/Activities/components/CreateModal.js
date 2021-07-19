import { useEffect, useState } from "react";

export default function CreateModal({ active, close, func }) {
  const [title, setTitle] = useState("");

  useEffect(() => setTitle(""), [active]);

  return (
    <div className={"modal" + (active ? " is-active" : "")}>
      <div className="modal-background" onClick={close}></div>
      <div className="modal-card" style={{ maxWidth: "550px" }}>
        <header className="modal-card-head">
          <p className="modal-card-title">New Activity</p>
          <button
            className="delete"
            aria-label="close"
            onClick={close}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Title</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Activity title"
              />
              <span className="icon is-left">
                <i className="fas fa-skiing-nordic"></i>
              </span>
            </div>
          </div>
        </section>
        <footer
          className="modal-card-foot is-justify-content-flex-end"
          style={{ padding: "10px" }}
        >
          <button className="button is-light" onClick={close}>
            Cancel
          </button>
          <button className="button is-success" onClick={() => func(title)}>
            Create
          </button>
        </footer>
      </div>
    </div>
  );
}
