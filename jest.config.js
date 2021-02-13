module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "html"],
  moduleNameMapper: {
    "@nuxtjs/composition-api": "@nuxtjs/composition-api/lib/entrypoint.js",
  },
};
