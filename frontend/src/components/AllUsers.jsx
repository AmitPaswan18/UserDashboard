import axios from "axios";
import { useState } from "react";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("/api/random")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={handleSubmit}> All Users</button>
      {users.map((res) => (
        <>
          <div key={crypto.randomUUID()}>{res.name}</div>
          <div key={crypto.randomUUID()}>{res.email}</div>
          <img key={crypto.randomUUID()} src={res.profileImage} />
        </>
      ))}
    </div>
  );
};

export default AllUsers;
