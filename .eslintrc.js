module.exports = {
    parser: 'typescript-eslint-parser',
    extends: "standard",
    overrides: [
      {
        files: [
          '**/*.ts',
        ],
        rules: {
          // Disable undefined name warnings for TypeScript.
          // TypeScript itself can check this better.
          'no-undef': 'off',
        },
      },
    ],
};
