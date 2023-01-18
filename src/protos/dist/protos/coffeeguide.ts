/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

/** Reply containing a list of the available coffees */
export interface CoffeeListReply {
  list: Coffee[];
}

/** Message containing the name and information about a coffee */
export interface Coffee {
  name: string;
  preview: string;
}

export interface CoffeeReply {
  name: string;
  description: string;
}

/** Request containing the name of the requested coffee */
export interface CoffeeRequest {
  name: string;
}

function createBaseCoffeeListReply(): CoffeeListReply {
  return { list: [] };
}

export const CoffeeListReply = {
  encode(message: CoffeeListReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Coffee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoffeeListReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoffeeListReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(Coffee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoffeeListReply {
    return { list: Array.isArray(object?.list) ? object.list.map((e: any) => Coffee.fromJSON(e)) : [] };
  },

  toJSON(message: CoffeeListReply): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) => e ? Coffee.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CoffeeListReply>, I>>(base?: I): CoffeeListReply {
    return CoffeeListReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CoffeeListReply>, I>>(object: I): CoffeeListReply {
    const message = createBaseCoffeeListReply();
    message.list = object.list?.map((e) => Coffee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoffee(): Coffee {
  return { name: "", preview: "" };
}

export const Coffee = {
  encode(message: Coffee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.preview !== "") {
      writer.uint32(18).string(message.preview);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coffee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoffee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.preview = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Coffee {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      preview: isSet(object.preview) ? String(object.preview) : "",
    };
  },

  toJSON(message: Coffee): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.preview !== undefined && (obj.preview = message.preview);
    return obj;
  },

  create<I extends Exact<DeepPartial<Coffee>, I>>(base?: I): Coffee {
    return Coffee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Coffee>, I>>(object: I): Coffee {
    const message = createBaseCoffee();
    message.name = object.name ?? "";
    message.preview = object.preview ?? "";
    return message;
  },
};

function createBaseCoffeeReply(): CoffeeReply {
  return { name: "", description: "" };
}

export const CoffeeReply = {
  encode(message: CoffeeReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoffeeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoffeeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoffeeReply {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: CoffeeReply): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<CoffeeReply>, I>>(base?: I): CoffeeReply {
    return CoffeeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CoffeeReply>, I>>(object: I): CoffeeReply {
    const message = createBaseCoffeeReply();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCoffeeRequest(): CoffeeRequest {
  return { name: "" };
}

export const CoffeeRequest = {
  encode(message: CoffeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoffeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoffeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoffeeRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CoffeeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CoffeeRequest>, I>>(base?: I): CoffeeRequest {
    return CoffeeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CoffeeRequest>, I>>(object: I): CoffeeRequest {
    const message = createBaseCoffeeRequest();
    message.name = object.name ?? "";
    return message;
  },
};

export type CoffeeGuideService = typeof CoffeeGuideService;
export const CoffeeGuideService = {
  /** Get the list of available coffee's */
  getCoffeeList: {
    path: "/coffeeguide.CoffeeGuide/GetCoffeeList",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: CoffeeListReply) => Buffer.from(CoffeeListReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CoffeeListReply.decode(value),
  },
  /** Get info about a specific coffee */
  getCoffee: {
    path: "/coffeeguide.CoffeeGuide/GetCoffee",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CoffeeRequest) => Buffer.from(CoffeeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CoffeeRequest.decode(value),
    responseSerialize: (value: CoffeeReply) => Buffer.from(CoffeeReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CoffeeReply.decode(value),
  },
} as const;

export interface CoffeeGuideServer extends UntypedServiceImplementation {
  /** Get the list of available coffee's */
  getCoffeeList: handleUnaryCall<Empty, CoffeeListReply>;
  /** Get info about a specific coffee */
  getCoffee: handleUnaryCall<CoffeeRequest, CoffeeReply>;
}

export interface CoffeeGuideClient extends Client {
  /** Get the list of available coffee's */
  getCoffeeList(
    request: Empty,
    callback: (error: ServiceError | null, response: CoffeeListReply) => void,
  ): ClientUnaryCall;
  getCoffeeList(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CoffeeListReply) => void,
  ): ClientUnaryCall;
  getCoffeeList(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CoffeeListReply) => void,
  ): ClientUnaryCall;
  /** Get info about a specific coffee */
  getCoffee(
    request: CoffeeRequest,
    callback: (error: ServiceError | null, response: CoffeeReply) => void,
  ): ClientUnaryCall;
  getCoffee(
    request: CoffeeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CoffeeReply) => void,
  ): ClientUnaryCall;
  getCoffee(
    request: CoffeeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CoffeeReply) => void,
  ): ClientUnaryCall;
}

export const CoffeeGuideClient = makeGenericClientConstructor(
  CoffeeGuideService,
  "coffeeguide.CoffeeGuide",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CoffeeGuideClient;
  service: typeof CoffeeGuideService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
