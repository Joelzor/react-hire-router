import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./styles.css";

import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile/index";
import EditProfile from "./pages/EditProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    console.log(hiredPeople);
  }, [hiredPeople]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
