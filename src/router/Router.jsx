import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../Layout/LayoutSideBar/LayoutSideBar";
import { ProtectedRoute } from "../context/ProtectedRoute.context";
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";
import Profile from "../pages/Profile/Proflie";
import AppointmentsPage from "../pages/AppointmentsPage/AppointmentsPage";
import UpdateProfilePage from "../pages/UpdateProfile/UpdateProfile";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import DoctorPage from "../pages/DoctorPage/DoctorPage";
import BookingPage from "../pages/Booking/BookingPage";
import CreateQuestionPage from "../pages/QuestionPage/CreateQuestionPage";


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
        <Route
          path="/user" element={
            <Layout>
              <Profile />
            </Layout>}
        />
        <Route
          path="/appointments/:id" element={
            <Layout>
              <AppointmentsPage />
            </Layout>}
        />
        <Route
          path="/update-profile/:id" element={
            <Layout>
              <UpdateProfilePage />
            </Layout>}
        />
        <Route
          path="/question" element={
            <Layout>
              <QuestionPage />
            </Layout>}
        />
        <Route
          path="/create-question" element={
            <Layout>
              <CreateQuestionPage />
            </Layout>}
        />
        <Route
          path="/doctor" element={
            <Layout>
              <DoctorPage />
            </Layout>}
        />
        <Route
          path="/booking" element={
            <Layout>
              <BookingPage />
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
