import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import pluginImportResolverTypescript from 'eslint-import-resolver-typescript';

export default tseslint.config(
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { pluginImportResolverTypescript },
    settings: {
      pluginImportResolverTypescript: {
        typescript: true,
        node: true,
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['**/*.{test.ts,test.tsx}'],
    settings: { react: { version: 'detect' } },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: 'error',
    },
  },
  {
    name: 'Frontend Lint Config',
    files: ['frontend/**/*.{js,jsx,ts,tsx}'], // Frontend-specific configuration
    ...pluginImport.flatConfigs.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    ...pluginReactHooks.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    ...pluginJsxA11y.flatConfigs.recommended,
    plugins: {
      pluginReact,
      pluginReactHooks,
      pluginJsxA11y,
      pluginImport,
    },
    rules: {
      'pluginReact/hook-use-state': 'error',
      'pluginReact/jsx-key': 'error',
      'pluginReactHooks/exhaustive-deps': 'error',
      'pluginReactHooks/rules-of-hooks': 'error',
      'pluginJsxA11y/alt-text': 'error',
      'pluginJsxA11y/anchor-ambiguous-text': 'warn',
      'pluginJsxA11y/anchor-is-valid': 'error',
      'pluginJsxA11y/control-has-associated-label': 'error',
      'pluginJsxA11y/heading-has-content': 'error',
      'pluginJsxA11y/label-has-for': 'error',
      'pluginImport/no-unresolved': 'error',
    },
  }
);
