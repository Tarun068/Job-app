import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import JobPage from "./components/Jobpage";
import MainLayout from "./Layouts/MainLayout";
import JobDesc from "./components/Jobdesc";
import Addjob from "./components/Addjob";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/job/:id" element={<JobDesc />} />
        <Route path="/job/addJob" element={<Addjob />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
