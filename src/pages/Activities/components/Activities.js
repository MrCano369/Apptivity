import { useEffect, useState } from "react";
import useAuth from "../../../auth/useAuth";
import useFetch from "../../../hooks/useFetch";
import useModal from "../../../hooks/useModal";
import Activity from "./Activity";
import CreateModal from "./CreateModal";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [createModalState, openCreadeModal, closeCreateModal] = useModal();

  const { get, post } = useFetch();

  const createActivity = async (title) => {
    const res = await post(
      "https://apptivity.herokuapp.com/api/createactivity",
      { activityTitle: title }
    );
    if (res.err) return alert(res.err);
    closeCreateModal();
    getActivities();
  };

  const deleteActivity = async (id) => {
    const res = await post(
      "https://apptivity.herokuapp.com/api/deleteactivity",
      { activityId: id }
    );

    if (res.err) return alert(res.err);
    getActivities();
  };

  const getActivities = async () => {
    const res = await get("https://apptivity.herokuapp.com/api/getactivities");

    if (res.err) return alert(res.err);
    setActivities(res);
  };

  const checkToday = async (id) => {
    const res = await post("https://apptivity.herokuapp.com/api/checktoday", {
      activityId: id,
    });

    if (res.err) return alert(res.err);
    getActivities();
  };

  useEffect(() => {
    getActivities();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { logout, user } = useAuth();

  return (
    <>
      <CreateModal
        active={createModalState}
        close={closeCreateModal}
        func={createActivity}
      />
      <div className="section hero">
        <header>
          <p className="title">{user.name}'s Activities</p>
          <button className="button is-danger" onClick={logout}>
            LogOut
          </button>
        </header>
        <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
          {activities.map((a) => (
            <Activity
              key={a._id}
              data={a}
              destroy={deleteActivity}
              check={checkToday}
            />
          ))}
          <div
            className="newActivity box has-text-centered"
            onClick={openCreadeModal}
          >
            New Activity
          </div>
        </div>
      </div>
    </>
  );
}

// const data = [
//   {
//     id: 0,
//     title: "Activity 1",
//     days: [
//       "Jul 3 2021",
//       "Jul 4 2021",
//       "Jul 5 2021",
//       "Jul 6 2021",
//       "Jul 7 2021",
//       "Jul 8 2021",
//       "Jul 9 2021",
//       "Jul 10 2021",
//       "Jul 11 2021",
//       "Jul 12 2021",
//       "Jul 13 2021",
//     ],
//     todayCheck: true,
//   },
//   {
//     id: 1,
//     title: "Activity 2",
//     days: [
//       "Jul 8 2021",
//       "Jul 9 2021",
//       "Jul 10 2021",
//       "Jul 11 2021",
//       "Jul 12 2021",
//     ],
//     todayCheck: false,
//   },
//   {
//     id: 2,
//     title: "Activity 3",
//     days: [
//       "Jul 3 2021",
//       "Jul 4 2021",
//       "Jul 5 2021",
//       "Jul 6 2021",
//       "Jul 7 2021",
//       "Jul 8 2021",
//       "Jul 9 2021",
//       "Jul 10 2021",
//       "Jul 11 2021",
//       "Jul 12 2021",
//     ],
//     todayCheck: false,
//   },
//   {
//     id: 3,
//     title: "Activity 4",
//     days: [],
//     todayCheck: false,
//   },
// ];
