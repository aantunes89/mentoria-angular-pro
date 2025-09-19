const nx = require("@nx/eslint-plugin");

module.exports = [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
            {
              sourceTag: "type:data-access",
              onlyDependOnLibsWithTags: ["type:data-access"],
            },
            {
              sourceTag: '"type:feature"',
              onlyDependOnLibsWithTags: ["type:data-access", "type:ui", "type:feature"],
            },
            {
              sourceTag: "type:ui",
              onlyDependOnLibsWithTags: ["type:data-access", "type:ui"],
            },
          ],
        },
      ],
      "no-console": ["error"],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: {},
  },
];
