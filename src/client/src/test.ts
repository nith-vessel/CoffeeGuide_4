import { coffeeClient } from "./index";

async function run() {
  const client = coffeeClient();
  console.log(await client.getCoffeeList);
}

run();
