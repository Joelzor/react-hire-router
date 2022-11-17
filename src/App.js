import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./styles.css";

import PeopleList from "./pages/Dashboard/components/PeopleList";
import PersonProfile from "./pages/PersonProfile/index";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const getPeople = async () => {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const people = await res.json();
    setHiredPeople(people.results);
  };

  useEffect(() => {
    getPeople();
  }, []);

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
        <Route path="/" element={<PeopleList people={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile />} />
      </Routes>
    </>
  );
}
