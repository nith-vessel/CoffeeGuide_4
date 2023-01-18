const { execSync } = require('child_process');

// delete the lib directory to start with an empty state
execSync(`rm -rf ./dist`);

// make the lib directory if it doesn't exist
execSync(`mkdir -p ./dist/protos`);

// generate the ts-proto files for all .proto files in the proto directory
execSync(
    `protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true --ts_proto_out=./dist/protos --proto_path=./ ./*.proto`,
);
