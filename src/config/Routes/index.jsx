import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../../screens/SignIn";
import Dashboard from "../../screens/Dashboard";
import Gallary from "../../screens/Gallary";
import SecondGallary from "../../screens/SecondaryGallary";
import Certificates from "../../screens/Certificates";
import Notice from "../../screens/Notice";
import Ziyarat from "../../screens/Packages/Ziyarat";
import Umrah from "../../screens/Packages/Umrah";
import Hajj from "../../screens/Packages/Hajj";

  

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/gallery" element={<Gallary/>} />
          <Route path="/admin/certificate" element={<Certificates/>} />
          <Route path="/admin/notice" element={<Notice/>} />
          <Route path="/admin/package/hajj" element={<Hajj/>} />
          <Route path="/admin/package/umrah" element={<Umrah/>} />
          <Route path="/admin/package/ziyarat" element={<Ziyarat/>} />
          <Route path="/secondgallary" element={<SecondGallary/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;