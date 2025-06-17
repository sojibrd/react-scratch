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
};
