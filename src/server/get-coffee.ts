import { CoffeeReply, CoffeeRequest } from "../protos/dist";

export default function getCoffee(coffeeRequest: CoffeeRequest): CoffeeReply {
  const coffeeReply: CoffeeReply = {
    name: "",
    description: "",
  };
  const data = require("../../resources/coffeeDB.json");
  console.log("ingetCoffeeServer, request name is ", coffeeRequest.name);
  data["Coffee"].forEach((e: { [x: string]: string }) => {
    if (e["name"] == coffeeRequest.name) {
      coffeeReply.name = e["name"];
      coffeeReply.description = e["description"];
    }
  });

  return coffeeReply;
}
