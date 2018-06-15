exports.config = {
  specs: ['./e2e/tests/createFilm.e2e-spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8080',
  framework: 'jasmine'
}
