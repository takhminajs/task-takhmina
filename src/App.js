import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import FormList from "./components/FormList.jsx/FormList";
import Reciepts from "./components/Reciepts/Reciepts";

const App = () => {
  const [email, setEmail] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  function handleEmail(newObj) {
    let newEmail = [...email];
    newEmail.push(newObj);
    setEmail(newEmail);
  }
  return (
    <div>
      <Counter />
      <Reciepts />

      {isLogin ? (
        <FormList setIsLogin={setIsLogin} email={email} />
      ) : (
        <Form setIsLogin={setIsLogin} handleEmail={handleEmail} />
      )}
    </div>
  );
};

export default App;
