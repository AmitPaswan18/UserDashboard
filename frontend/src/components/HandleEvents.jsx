import { useState } from "react";
import axios from "axios";

const HandleEvents = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsers = () => {
    axios
      .get("/api/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/api/users", {
        username,
        first_name,
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setUsername("");
    setFirstName("");
    setEmail("");
    setPassword("");
  };

  const deleteUser = () => {
    axios
      .delete(`/api/api/users`)
      .then(() => {
        console.log(`User deleted successfully.`);
      })
      .catch((error) => {
        console.error(`Error deleting user: ${error}`);
      });
  };
  //   useEffect(() => {
  //     const form = document.getElementById("form");
  //     form.addEventListener("submit", formSubmit);
  //   }, []);

  return (
    <>
      <div
        id="mainForm"
        className="h-full p-5 flex flex-col md:flex-row  items-center w-full bg-gradient-to-r from-sky-400 to-indigo-600 ">
        <div className="w-[70%] my-5">
          <form
            id="form"
            onSubmit={handleSubmit}
            method="POST"
            acceptCharset="UTF-8"
            className="flex-col rounded-[20px] shadow-lg shadow-fuchsia-500 border-fuchsia-500 border p-3 md:p-10  justify-center items-center md:w-[70%]  px-4 lg:w-[40%] flex space-y-5">
            <p className="text-white"> Please enter your info below </p>
            <label>
              <input
                className="border-2 rounded border-purple-500  w-full h-5 p-4 hover:shadow-2xl placeholder:text-gray-600"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                maxLength={12}
                name="Username"
                required
              />
            </label>

            <label>
              <input
                className="border-2 border-purple-500 rounded h-5 w-full md:[50%] p-4 placeholder:text-gray-600"
                placeholder="Full Name"
                value={first_name}
                onChange={handleFirstNameChange}
                name="fullName"
                type="text"
                id="fullname"
                required
              />
            </label>
            <label>
              <input
                className="border-2 border-purple-500 rounded h-5 hover:shadow-2xl md:[70%] w-full p-4 placeholder:text-gray-600"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="off"
                name="email"
                required
              />
            </label>

            <label>
              <input
                className="border-2 border-purple-500 rounded h-5 w-full  p-4 placeholder:text-gray-600"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                name="lastName"
                autoComplete="off"
                required
              />
            </label>

            <button
              className=" mt-8 md:ml-16  text-black font-bold border-2 h-fit w-full md:w-[10vw] rounded-md p-3 bg-white hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 md:mr-[62px]"
              type="submit">
              Submit now
            </button>
          </form>
        </div>
        <div className="md:w-[40%] mt-20 rounded-[20px] shadow-lg shadow-fuchsia-500 border-fuchsia-500 border h-fit p-2 md:relative right-[20%]">
          <p className="text-white text-center">
            Click to see the users currently log in
          </p>
          <div className="flex items-center justify-center">
            <button
              className="text-md mt-2 p-1 bg-blue-200  font-semibold  rounded-md border-2"
              onClick={handleUsers}
              type="button">
              {" "}
              Users
            </button>
          </div>
          <div className="">
            {users.map((value) => {
              const { username, email } = value;
              return (
                <div
                  className="flex flex-wrap justify-center bg-white gap-1 rounded h-full w-full p-2 mt-2 text-sm"
                  key={crypto.randomUUID()}>
                  <p>Username: {username} </p>
                  <p>Email: {email}</p>
                  <div className="flex justify-center items-center mr-15">
                    <button onClick={deleteUser}>Delete User</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div>
          <input
            type="text"
            placeholder="Enter username to delete"
            value={usernameToDelete}
            onChange={(e) => setUsernameToDelete(e.target.value)}
          />
          <button onClick={handleDelete}>Delete User</button>
        </div> */}
      </div>
    </>
  );
};

export default HandleEvents;
