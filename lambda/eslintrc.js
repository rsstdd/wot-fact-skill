module.exports = {
  parser: "babel-eslint",
  extends: ["google", "eslint:recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    before: true,
    after: true,
    spyOn: true,
  },
  rules: {
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
      },
    ],
    "consistent-return": ["error"],
    "no-console": "off",
    "no-inner-declarations": "off",
    "prettier/prettier": "error",
    quotes: ["error", "backtick"],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
  },
};
