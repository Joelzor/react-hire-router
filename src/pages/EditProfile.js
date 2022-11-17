import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditProfile = ({ hiredPeople, setHiredPeople }) => {
  const [person, setPerson] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h3>
        Current name: {person.name.first} {person.name.last}
      </h3>
      <h3>Current wage: £{person.wage}</h3>
    </article>
  );
};

export default EditProfile;
