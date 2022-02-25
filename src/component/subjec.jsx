import React, { useState } from "react";
import Form from "./Form";
export default function Subject() {
  const [value, setValue] = useState();
  return (
    <div>
      <Form>
        <input name="hi" value={value} onChange={change} />
        <button onClick={click}>입력</button>
      </Form>
    </div>
  );
  function click(e) {
    console.log(value);
    setValue("");
  }
  function change(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
}
