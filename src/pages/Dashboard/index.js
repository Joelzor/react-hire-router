import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople } = props;

  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const people = await res.json();
    setPeople(people.results);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
