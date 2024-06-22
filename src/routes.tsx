import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/views/Dashboard";
import CreateProject from "./views/projects/CreateProject";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/projects/create" element={<CreateProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}