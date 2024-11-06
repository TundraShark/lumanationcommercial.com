/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    Vue: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "vue"
    // "@typescript-eslint"
  ],
  ignorePatterns: ["backend/out", "src/bootstrap-vue", "src/vite-env.d.ts"],
  // Base linting rules to use
  extends: [
    "@vue/eslint-config-typescript",
    "@vue/standard",
    "@vue/typescript/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended"
  ],
  // My custom rules to override the above base linting rules
  rules: {
    // https://eslint.org/docs/rules
    "vue/no-reserved-component-names": "off",
    "object-shorthand": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
    "vue/one-component-per-file": "off",
    "vue/no-unused-components": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/object-property-newline": "off",
    "array-bracket-spacing": ["error", "never"],
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "block-scoped-var": "error",
    "block-spacing": "off",
    camelcase: ["warn", { properties: "never" }],
    "comma-dangle": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "@typescript-eslint/no-this-alias": "off",
    "consistent-this": ["error", "that"],
    "default-param-last": "error",
    "dot-notation": "error",
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "key-spacing": "off",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "new-cap": ["error", { capIsNew: false }],
    "no-buffer-constructor": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-eval": "error",
    "no-extra-label": "warn",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-label-var": "error",
    "no-loop-func": "error",
    "no-magic-numbers": ["warn", { ignore: [-1, 0, 1, 2, 3, 10, 200, 400, 403, 500], ignoreArrayIndexes: true }],
    "no-multi-assign": "error",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-negated-condition": "error",
    "no-new-object": "error",
    "no-path-concat": "error",
    "no-process-env": "off",
    "no-shadow": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unreachable": "warn",
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
    "no-var": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside"],
    "object-curly-spacing": "off",
    "one-var-declaration-per-line": ["error", "initializations"],
    "operator-assignment": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "prefer-arrow-callback": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    radix: ["error", "always"],
    "require-await": "error",
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    semi: ["error", "always"],
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multi-spaces": "off",
    "vue/singleline-html-element-content-newline": "off",
    "wrap-regex": "error"
  }
};
