module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0
  }
};
