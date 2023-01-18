import { Coffee, CoffeeListReply } from "../protos/dist";

export default function getCoffeeList(): CoffeeListReply {
  const data = require("../../resources/coffeeDB.json");
  const arr = Array<Coffee>();
  const send: CoffeeListReply = {
    list: [],
  };
  data["Coffee"].forEach((e: { [x: string]: string }) => {
    const coffee_item = {
      name: e["name"],
      preview: e["preview"],
    };
    arr.push(coffee_item);
  });
  send.list = arr;
  console.log("in getCoffeeList function", send);

  return send;
}
