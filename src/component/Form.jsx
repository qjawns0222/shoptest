import React, { useState } from "react";
import Bar from "./bar";
import Header from "./Header";
import style from "../css/Form.module.css";
export default function Form({ children, state }) {
  const [data, setdata] = useState(false);

  return (
    <div>
      <div className={style.head}>
        <Header setdata={setdata} data={data} />
      </div>
      <div className={style.content}>
        <div className={data ? style.bar : style.none}>
          <Bar data={data} />
        </div>
        <div className={state ? style.main : style.main2}>{children}</div>
      </div>
    </div>
  );
}
