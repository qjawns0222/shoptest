import React from "react";
export default function Header({ setdata, data }) {
  return (
    <div>
      HEAS<button onClick={click}>메뉴</button>
    </div>
  );
  function click() {
    setdata(!data);
  }
}
