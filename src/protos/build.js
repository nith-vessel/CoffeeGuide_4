const { Project } = require("ts-morph");
const fs = require("fs");

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourcefile = project.createSourceFile("dist/index.ts", "", {
  overwrite: true,
});

// get the names of all the files in the lib directory
const files = fs.readdirSync("dist/protos");

// add a default exports for each file in the lib directory to the sourcefile
files.forEach((file) => {
  const name = file.split(".")[0];
  sourcefile.addExportDeclaration({
    moduleSpecifier: `./protos/${name}`,
  });
});

project.saveSync();
