import { HashRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  //pa ir despertando al backend (heroku 😒)
  fetch("https://apptivity.herokuapp.com/servertime");

  return (
    <AuthProvider>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router>
        <ToastContainer />
        <AppRouter />
      </Router>
    </AuthProvider>
  );
}
