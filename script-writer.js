const fs = require("fs");
const pkg = require("./pkg.json");
pkg.scripts.start = "webpack-dev-server";
pkg.scripts.test = "karma start";

fs.writeFile("./package.json", JSON.stringify(pkg));