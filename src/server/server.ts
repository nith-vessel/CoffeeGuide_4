import * as grpc from "@grpc/grpc-js";
import { CoffeeGuideServer, CoffeeGuideService } from "../protos/dist/index";
import getCoffee from "./get-coffee";
import getCoffeeList from "./get-coffee-list";

// class CoffeeGuideServerImpl implements CoffeeGuideServer {
//     getCoffee(call: grpc.ServerUnaryCall<CoffeeRequest, CoffeeReply>, callback: sendUnaryData<CoffeeReply>): void {
//         console.log(`${new Date().toISOString()}    getCoffee`);
//         // call.on('data', (coffee: CoffeeRequest) => getCoffee(coffee));
//         // call.on('end', () => callback(null, new CoffeeReply()));
//         const reply = getCoffee(call.request);
//         callback(null, reply);
//     }
//     getCoffeeList(call: grpc.ServerUnaryCall<Empty, CoffeeListReply>, callback: sendUnaryData<Empty>): void {
//         console.log(`${new Date().toISOString()}    getCoffeeList`);
//         callback(null, getCoffeeList());
//     }
// }

export const coffeeServer: CoffeeGuideServer = {
  getCoffee(call, callback) {
    console.log(`${new Date().toISOString()}    getCoffee`);
    const reply = getCoffee(call.request);
    callback(null, reply);
  },
  getCoffeeList(call, callback) {
    console.log(`${new Date().toISOString()}    getCoffeeList`);
    callback(null, getCoffeeList());
  },
};
export default function serve(): void {
  const server = new grpc.Server();
  // @ts-ignore
  server.addService(CoffeeGuideService, coffeeServer);
  server.bindAsync(
    `localhost:50051`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        throw err;
      }
      console.log(`Listening on ${port}`);
      server.start();
    }
  );
}
serve();
