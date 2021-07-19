export default function Day({ date }) {
  const [month, day] = date.split(" ");
  return <div className="day">{`${day}/${month}`}</div>;
}
