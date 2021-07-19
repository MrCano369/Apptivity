export default function UserInput({ label, value, setter }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left">
        <input
          className="input"
          type="text"
          placeholder="MrCano369"
          value={value}
          onChange={(e) => setter(e.target.value)}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user"></i>
        </span>
      </div>
    </div>
  );
}
