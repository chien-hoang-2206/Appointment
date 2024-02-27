import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../Layout/LayoutSideBar/LayoutSideBar";
import { ProtectedRoute } from "../context/ProtectedRoute.context";
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/" element={
            <Layout>
              <HomePage />
            </Layout>}
        />
        <Route
          path="/home" element={
            <Layout>
              <HomePage />
            </Layout>}
        />
        {/* <Route
          path="/field/:id" element={
            <LayoutSideBar>
              <Home />
            </LayoutSideBar>}
        /> */}
        {/* <Route
          path="/admin"
          element=<ProtectedRoute Component={HomeAdmin} role={"ADMIN"} />
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;