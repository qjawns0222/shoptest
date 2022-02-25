import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import Card from "./card";
import Form from "./Form";
import youtubeData from "../data/youtubeData.json";
export default function Home() {
  const [name, setName] = useState("");

  return (
    <div>
      <Form>
        <button onClick={click}>BTS</button>
        {youtubeData["data"]
          .filter((p) => {
            if (p.title.includes(name)) {
              return p;
            }
          })
          .map(Card)}
      </Form>
    </div>
  );
  function click(e) {
    setName(e.target.innerHTML);
  }
}
