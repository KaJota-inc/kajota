module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'simple-import-sort', 'i18next'],
    settings: {
        'react-native/style-sheet-object-names': ['RNStyles'],
    },
    rules: {
        'linebreak-style': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': 'error',
        'no-unused-vars': 'warn', // Note: you must disable the base rule as it can report incorrect errors
        'no-duplicate-imports': 'warn',
        'no-extra-boolean-cast': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'react/react-in-jsx-scope': 'off',
        'react-native/no-unused-styles': 2,
        'react-native/no-inline-styles': "warn",
        'react-native/no-color-literals': 'warn',
        'react-native/no-single-element-style-arrays': 'error',
        'react/no-array-index-key': 'error',
        'i18next/no-literal-string': 'warn',

        'react-native/sort-styles': [
            'warn',
            'asc',
            {ignoreClassNames: true, ignoreStyleProperties: false},
        ],

        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // '@typescript-eslint/ban-ts-comment': [
        //     'warn',
        //     {
        //         'ts-expect-error': 'allow-with-description',
        //         'ts-ignore': 'allow-with-description'
        //     },
        // ],
        '@typescript-eslint/ban-ts-comment': 'warn',

        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies // off - useEffect error disable
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/no-unstable-nested-components': ['warn', {allowAsProps: true}],
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandFirst: true,
                multiline: 'ignore',
                ignoreCase: true,
                reservedFirst: true,
            },
        ],

        'no-restricted-imports': [
            'warn',
            {
                paths: [
                    // 'react-native-reanimated',
                    // 'react-native-gesture-handler',
                    'react-native-encrypted-storage',
                ],
            },
        ],

        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^react', '^@?\\w'],
                    ['^(@app)(/.*|$)'],
                    ['^(@pages)(/.*|$)'],
                    ['^(@constants)(/.*|$)'],
                    ['^(@shared)(/.*|$)'],
                    ['^(@components)(/.*|$)'],
                    ['^(@hooks)(/.*|$)'],
                    ['^(@navigation)(/.*|$)'],
                    ['^(@store)(/.*|$)'],
                    ['^(@services)(/.*|$)'],
                    ['^\\u0000'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*!/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            },
        ],
    },
    globals: {
        debag: false,
    },
    ignorePatterns: [
        'node_modules',
        'babel.config.js',
        'metro.config.js',
        'jest.config.js',
        'transformer.js',
    ],
};

