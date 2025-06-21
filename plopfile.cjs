module.exports = function (plop) {
  plop.setGenerator("feature", {
    description: "Generate a new feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your feature name?",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/features/{{kebabCase name}}",
        templateFiles: "plop-templates/feature/**/*",
        base: "plop-templates/feature",
      },
    ],
  });

  plop.setGenerator("component", {
    description: "Generate a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "list",
        name: "componentType",
        message: "Component type:",
        choices: [
          { name: "Common component", value: "common" },
          { name: "Regular component", value: "regular" },
        ],
      },
    ],
    actions: function (data) {
      const basePath =
        data.componentType === "common"
          ? "src/components/common/{{name}}"
          : "src/components/{{name}}";
      return [
        {
          type: "add",
          path: `${basePath}/{{name}}.tsx`,
          templateFile: "plop-templates/components/component.tsx",
        },
        {
          type: "add",
          path: `${basePath}/{{name}}.module.scss`,
          templateFile: "plop-templates/components/component.module.scss",
        },
        {
          type: "add",
          path: `${basePath}/index.ts`,
          templateFile: "plop-templates/components/index.ts",
        },
      ];
    },
  });

  plop.setGenerator("page", {
    description: "Generate a new page (folder, TSX, CSS, and barrel)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name (e.g. Home, About):",
        validate: (value) => !!value.length || "Page name is required",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/pages/Page.tsx",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/pages/Page.module.scss",
      },
      {
        type: "append",
        path: "src/pages/index.ts",
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';\n",
      },
    ],
  });
};
