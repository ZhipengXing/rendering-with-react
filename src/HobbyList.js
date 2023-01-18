import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  const list = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
  if (list.length === 0) {
    return null;
  }
  return (
    <>
      <h4>Hobbies</h4>
      <ul>{list}</ul>
    </>
  );
}

export default HobbyList;
