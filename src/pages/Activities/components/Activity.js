import useModal from "../../../hooks/useModal";
import DeleteModal from "./DeleteModal";

export default function Activity({ data, destroy, check }) {
  const [deleteModalState, openDeleteModal, closeDeleteModal] = useModal();

  const { _id: id, title, days, todayCheck } = data;

  return (
    <>
      <DeleteModal
        active={deleteModalState}
        close={closeDeleteModal}
        title={title}
        func={() => destroy(id)}
      />
      <div className="box">
        <div className="activityHeader">
          <div>
            <p className="title">{title}</p>
            <p className="subtitle">Streak: {days.length} days</p>
          </div>
          <button className="button is-danger" onClick={openDeleteModal}>
            <span className="icon is-small">
              <i className="fas fa-trash"></i>
            </span>
          </button>
        </div>

        <div className="daysContainer">
          {days.map((d) => {
            // eslint-disable-next-line
            const [_, month, day] = d.split(" ");
            return <div key={d} className="day">{`${day}/${month}`}</div>;
          })}
        </div>

        <div className="has-text-centered" style={{ marginTop: "10px" }}>
          {todayCheck ? (
            <button className="button is-static">Checked</button>
          ) : (
            <button onClick={() => check(id)} className="button is-primary">
              Check
            </button>
          )}
        </div>
      </div>
    </>
  );
}
