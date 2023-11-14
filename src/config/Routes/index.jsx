import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../../screens/SignIn";
import Dashboard from "../../screens/Dashboard";
import Gallary from "../../screens/Gallary";

  

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallary" element={<Gallary/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;