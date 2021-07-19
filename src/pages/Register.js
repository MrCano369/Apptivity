import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../routers/routes";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const { register } = useAuth();

  const validation = (e) => {
    e.preventDefault();
    register({ email, name, pass });
  };

  return (
    <div className="hero section">
      <div className="container">
        <p className="title">Registro</p>

        <form onSubmit={validation}>
          <div className="field">
            <label className="label">Correo electrónico</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="email"
                placeholder="acano3@ucol.mx"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Nombre de usuario</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="MrCano369"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                value={pass}
                required
                onChange={(e) => setPass(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div className="has-text-centered">
            <button className="button is-primary">Registrarme</button>
          </div>
        </form>
        Ya tengo cuenta, <Link to={routes.login}>Iniciar Sesión</Link>
      </div>
    </div>
  );
}
