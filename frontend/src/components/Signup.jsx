import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  return (
    <>
      <div
        id="mainForm"
        className="h-full p-5 flex flex-col md:flex-row justify-center items-center w-full bg-gradient-to-r from-sky-400 to-indigo-600 ">
        <div className="w-[70%] my-5">
          <form
            id="form"
            onSubmit={handleSubmit}
            method="POST"
            acceptCharset="UTF-8"
            className="flex-col relative left-[30%] rounded-[20px] shadow-lg shadow-fuchsia-500 border-fuchsia-500 border p-3 md:p-10  justify-center items-center md:w-[70%]  px-4 lg:w-[40%] flex space-y-5">
            <p className="text-white"> New user Sign up </p>

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
      </div>
    </>
  );
};

export default Signup;
