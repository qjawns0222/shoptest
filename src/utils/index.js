import moment from "moment";

export default function Timereturn(date) {
  const standard = moment("2021-09-16T13:40:02");
  let en = moment(date).from(standard);
  let num;

  for (let i = 0; i < en.length; i++) {
    num = "";
    if (en[i] > 0 || en[i] === "a") {
      num = en[i];
      if (en.includes("day")) {
        num = num + "일전";
        en = num;
      }
      if (en.includes("hour")) {
        num = num + "시간전";
        en = num;
      }
      if (en.includes("minute")) {
        num = num + "분전";
        en = num;
      }
    }
  }

  console.log(en);
  return en;
}
