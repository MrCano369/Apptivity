export default function PassInput({ label, value, setter }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left">
        <input
          className="input"
          type="password"
          value={value}
          onChange={(e) => setter(e.target.value)}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </div>
    </div>
  );
}
