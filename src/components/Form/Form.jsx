import React, { useState } from "react";

const Form = (props) => {
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function addPerson() {
    let newObj = {
      email2,
      password,
      password2,
      id: Date.now(),
    };
    if (password === password2) {
      props.handleEmail(newObj);
      props.setIsLogin(true);
    } else {
      return alert("Write similar password");
    }
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "255px" }}>
        <input
          onChange={(e) => setEmail2(e.target.value)}
          value={email2}
          placeholder="email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          type="text"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          placeholder="confirm password"
          type="text"
        />
        <button onClick={() => addPerson()}>Sign Up</button>
      </div>
    </div>
  );
};

export default Form;
