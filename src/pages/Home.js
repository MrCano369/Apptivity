import { Link } from "react-router-dom";
import routes from "../routers/routes";

export default function Home() {
  return (
    <div className="section">
      <h1 className="title">Bienvenido a Apptivity</h1>
      es una aplicacion que te permitira crear actividades que debes realizar
      cada dia, podras llevar un seguimiento de tu racha.
      <b> ¡Superate a ti mismo!</b>
      <div className="buttons">
        <Link to={routes.register} className="button is-primary">
          Registrarme
        </Link>
        <Link to={routes.login} className="button is-light">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
