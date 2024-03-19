require("dotenv").config();
const { writeFileSync, mkdirSync } = require("fs");
const targetPath = "./src/enviroments/enviroments.ts";

const envFileContent = `
export const enviroment={
  mapbox_key:"${process.env["MAPBOX_KEY"]}",
  otra:"PROPIEDAD",
}`;

mkdirSync("./src/enviromenst", { recursive: true });

writeFileSync(targetPath, envFileContent);
