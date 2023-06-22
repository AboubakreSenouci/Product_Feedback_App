import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Addfeedback = lazy(() => import("./pages/Addfeedback"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Addfeedback" element={<Addfeedback />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
