module.exports = function (wallaby) {
    return {
        files: [
            "!src/**/*.test.js",
            "src/**/*.js",
        ],

        tests: ["src/**/*.test.js"],

        env: {
            type: "node",
            runner: "node",
        },

        testFramework: "jest",
    };
};
