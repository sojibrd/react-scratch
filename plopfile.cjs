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
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/components/component.tsx",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.module.css",
        templateFile: "plop-templates/components/component.module.css",
      },
      {
        type: "add",
        path: "src/components/{{name}}/index.ts",
        templateFile: "plop-templates/components/index.ts",
      },
    ],
  });
};
