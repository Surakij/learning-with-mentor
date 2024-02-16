module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-plusplus": "off",
    "no-restricted-properties": "off",
    "no-console": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "func-names": "off",
    "no-unused-expressions": "off",
    "no-nested-ternary": "off",
  },
};
