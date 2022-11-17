import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router";
import "./styles.css";

import PeopleList from "./pages/Dashboard/components/PeopleList";

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
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<PeopleList people={hiredPeople} />} />
      </Routes>
    </>
  );
}
