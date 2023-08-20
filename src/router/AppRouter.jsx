import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import Login from "../pages/Login";
import AppBar from "../components/AppBar";
import About from "../pages/About";
import Footer from "../components/Footer";
import PrivateRouter from "./PrivateRouter";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <Router>
      <AppBar />
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes> */}
      <Footer />
    </Router>
  );
};

export default AppRouter;
