exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io',
      show: true,
      browser: 'chromium'
    },
    REST: {
      endpoint: "http://my-json-server.typicode.com/typicode/demo",
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
  name: 'codeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
