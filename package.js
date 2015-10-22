Package.describe({
  name: "tavicu:bs-confirmation",
  version: "1.0.5",
  summary: "Confirmation plugin compatible with Twitter Bootstrap 3 extending Popover",
  git: "https://github.com/tavicu/bs-confirmation.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");
  api.use(["jquery", "twbs:bootstrap"], "client");
  api.addFiles("bootstrap-confirmation.js", "client");
});
