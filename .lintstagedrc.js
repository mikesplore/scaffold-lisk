module.exports = {
  "taka-frontend/**/*.{ts,tsx,js,jsx}": [
    "eslint --fix",
    "prettier --write",
  ],
  "taka-backend/**/*.{ts,js}": [
    "eslint --fix",
    "prettier --write",
  ],
};
