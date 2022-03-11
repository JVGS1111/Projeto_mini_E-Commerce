module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/@testing-library/jest-dom"
    },
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.tsx",
        "!src/**/*.spec.tsx"
    ],
    coverageReporters: [
        "lcov"
    ]
}