module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            'js/angular.js',
            'tests/angular-mocks.js',
            'js/app/**/*.js',
            'tests/*.spec.js'
        ],
        exclude: [],
        plugins: [
            require("karma-phantomjs-launcher"),
            require("karma-jasmine"),
            require("karma-spec-reporter")
        ],
        preprocessors: {},
        reporters: ['spec'],
        hostname: process.env.IP,
        port: process.env.PORT,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}
