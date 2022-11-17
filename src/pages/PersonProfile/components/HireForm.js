import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ hiredPeople, setHiredPeople, person }) {
  const [wage, setWage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (hiredPeople.find((hire) => hire.login.uuid === person.login.uuid)) {
      console.log("This person has already been hired!");
      return;
    }

    setHiredPeople([...hiredPeople, { ...person, wage }]);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
