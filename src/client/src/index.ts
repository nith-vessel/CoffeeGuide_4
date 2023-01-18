import { CoffeeGuideClient, CoffeeRequest } from "../../protos/dist";
import { credentials } from "@grpc/grpc-js";

const client = new CoffeeGuideClient(
  `localhost:50051`,
  credentials.createInsecure(),
  {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
  }
);

export const coffeeClient = () => {
  return {
    getCoffeeList() {
      return new Promise((resolve, reject) => {
        client.getCoffeeList({}, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    },
    getCoffee({ name }: CoffeeRequest) {
      return new Promise((resolve, reject) => {
        client.getCoffee({ name }, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    },
  };
};
