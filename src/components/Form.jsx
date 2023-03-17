import React from "react";

function Form({ userIsReg }) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {userIsReg === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {userIsReg ? (
        <button type="submit">Lgoin</button>
      ) : (
        <button type="submit">Register</button>
      )}
    </form>
  );
}

export default Form;
