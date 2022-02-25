import React, { useState } from "react";
import Form from "./Form";
export default function Assign() {
  const [state, setstate] = useState(false);
  function click() {
    setstate(!state);
  }
  return (
    <div>
      <Form state={state}>
        <button onClick={click}>true</button>
        {state ? <div>true확인</div> : <div>false확인</div>}
      </Form>
    </div>
  );
}
