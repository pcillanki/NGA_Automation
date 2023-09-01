module.exports = {
    default: {
      publishQuiet: true,
      format: [
        "progress-bar",
        "html:reports/cucumber-report.html",
        "json:reports/cucumber-report.json",
      ],
      parallel: 1,
      retry: 1,
    },
  };
  