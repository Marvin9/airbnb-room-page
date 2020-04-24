module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'airbnb-typescript'
    ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,  // Allows for the parsing of JSX
        },
        project: './tsconfig.json'
    },
    rules: {
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "jsx-a11y/anchor-is-valid": "off"
    },
    settings: {
        react: {
            version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
