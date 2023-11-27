import { useState } from "react";
import axios from "axios";

export const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.error(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        firstName,
        lastName,
      })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.error(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <div className="card">
        <form id="LoginForm" onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form>
        <form id="SignupForm" onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
      <style>{`
      .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background: linear-gradient(180deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%); }
      .card { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
      .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
      input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
      button { margin-top: 12px; width: 100%; padding: 8px; }
      `}</style>
    </div>
  );
};