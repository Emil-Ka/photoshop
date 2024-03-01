module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',

        indent: [2, 4],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'import/extensions': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
    globals: {
        IS_DEV: true,
    },
};
