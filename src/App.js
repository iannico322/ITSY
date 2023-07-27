

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import logo from './logo.svg';
import './App.css';
import Loader from "./components/loader/loader";
import 'animate.css';
const  Main= lazy(() =>
  wait(2300).then(() => import("./screens/main/main"))
);

function App() {
  return (
    
    <Router basename="/ITSY">
      <Routes>
          <Route path="/ITSY" element={<Navigate replace to="/main" />} />
          <Route
          path="/main"
          element={
            <>
              <Suspense fallback={<Loader />}>
                <Main />
              </Suspense>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
