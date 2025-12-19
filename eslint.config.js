// Copyright Kani Contributors
// SPDX-License-Identifier: Apache-2.0 OR MIT

const eslintPluginHeader = require('eslint-plugin-header');
const eslintPluginNoNull = require('eslint-plugin-no-null');
const eslintPluginTsdoc = require('eslint-plugin-tsdoc');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginImport = require('eslint-plugin-import');
const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love');

  return [
    {
      ignores: [
        'node_modules/**',
        '**/*.json',
        '**/*.gen.ts',
        'dist/**',
        'types/*.d.ts',
        '.eslintrc.js',
        'out/**',
      ],
    },
    {
      ...love,
      files: ['**/*.ts', '**/*.js'],
      languageOptions: {
        ...love.languageOptions,
        parserOptions: {
          ...love.languageOptions.parserOptions,
          tsconfigRootDir: __dirname,
        },
        globals: {
          ...love.languageOptions.globals,
          // Node.js globals
          console: 'readonly',
          process: 'readonly',
          __dirname: 'readonly',
          __filename: 'readonly',
          Buffer: 'readonly',
          global: 'readonly',
          module: 'readonly',
          require: 'readonly',
          // Mocha globals
          describe: 'readonly',
          it: 'readonly',
          before: 'readonly',
          after: 'readonly',
          beforeEach: 'readonly',
          afterEach: 'readonly',
        },
      },
      plugins: {
        ...love.plugins,
        header: eslintPluginHeader,
        'no-null': eslintPluginNoNull,
        tsdoc: eslintPluginTsdoc,
        prettier: eslintPluginPrettier,
        import: eslintPluginImport,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
      rules: {
        ...love.rules,
        ...eslintConfigPrettier.rules,
        curly: 2,
        'tsdoc/syntax': 'warn',
        'no-async-promise-executor': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/typedef': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        'no-async-promise-executors': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/camelcase': 'off',
        'no-useless-escape': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        'sort-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'no-inner-declarations': 'off',
        'no-extra-semi': 'off',
        'no-null/no-null': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-empty': 'off',
        // Additional overrides for eslint-config-love compatibility
        // These rules are disabled to maintain backward compatibility with the existing codebase
        // and prevent unnecessary code changes during the migration from eslint-config-standard-with-typescript
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/prefer-promise-reject-errors': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'eqeqeq': 'off',
        'object-shorthand': 'off',
        'no-useless-return': 'off',
        'no-template-curly-in-string': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        'import/enforce-node-protocol-usage': 'off',
        '@typescript-eslint/prefer-destructuring': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-console': 'off',
        'eslint-comments/require-description': 'off',
        'no-await-in-loop': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        'logical-assignment-operators': 'off',
        '@typescript-eslint/max-params': 'off',
        'no-useless-assignment': 'off',
        '@typescript-eslint/no-unnecessary-template-expression': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/init-declarations': 'off',
        'radix': 'off',
        'prefer-named-capture-group': 'off',
        'promise/avoid-new': 'off',
        'complexity': 'off',
        '@typescript-eslint/no-unsafe-type-assertion': 'off',
        'no-negated-condition': 'off',
        '@typescript-eslint/class-methods-use-this': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'max-lines': 'off',
        'guard-for-in': 'off',
        'max-depth': 'off',
        'arrow-body-style': 'off',
        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true, // don't want to sort import lines, use eslint-plugin-import instead
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: true,
          },
        ],
        // turn on errors for missing imports
        'import/no-unresolved': 'off',
        // 'import/no-named-as-default-member': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'builtin', // Built-in imports (come from NodeJS native) go first
              'external', // <- External imports
              'internal', // <- Absolute imports
              ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
              'index', // <- index imports
              'unknown', // <- unknown
            ],
            'newlines-between': 'always',
            alphabetize: {
              /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
              order: 'asc',
              /* ignore case. Options: [true, false] */
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ];
})();
