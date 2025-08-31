const path = require("path");

const buildNextEslintCommand = (filenames) =>
  `yarn next:lint --fix --file ${filenames
    .map((f) => path.relative("taka-frontend", f))
    .join(" --file ")}`;

const checkTypesNextCommand = () => "yarn next:check-types";

const buildHardhatEslintCommand = (filenames) =>
  `yarn hardhat:lint-staged ${filenames
    .map((f) => path.relative("taka-backend", f))
    .join(" ")}`;

module.exports = {
  "taka-frontend/**/*.{ts,tsx}": [
    buildNextEslintCommand,
    "prettier --write",
  ],
  "taka-backend/**/*.{ts,tsx}": [buildHardhatEslintCommand],
};
