import { Home } from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";

import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {Routes,Route, BrowserRouter } from "react-router";
import Write from "./pages/home/write/Write";


function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ?  <Write />:<Register />} />
        <Route path="/settings" element={user ? <Setting />:<Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
