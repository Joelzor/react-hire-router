import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditProfile = ({ hiredPeople, setHiredPeople }) => {
  const [person, setPerson] = useState(null);
  const [name, setName] = useState("");
  const [wage, setWage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedHiredPeople = hiredPeople.map((hire) => {
      if (hire.login.uuid === person.login.uuid) {
        return { ...hire, name, wage };
      } else {
        return hire;
      }
    });

    setHiredPeople(editedHiredPeople);

    setName("");
    setWage("");
    navigate("/");
  };

  if (!person) return <p>Loading...</p>;

  return (
    <>
      <article>
        <h3>
          Current name:
          {person.name.first
            ? `${person.name.first} ${person.name.last}`
            : person.name}
        </h3>
        <h3>Current wage: £{person.wage}</h3>
      </article>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Add new name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="wage"
          name="wage"
          placeholder="Add new wage here"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </>
  );
};

export default EditProfile;
