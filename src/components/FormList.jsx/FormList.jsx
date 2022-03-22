import React from "react";

const FormList = (props) => {
  return (
    <div>
      {props.email.map((item) => (
        <div key={item.id}>
          <h1>Welcome {item.email2}</h1>
          <button onClick={() => props.setIsLogin(false)}>Log Out</button>
        </div>
      ))}
    </div>
  );
};

export default FormList;
