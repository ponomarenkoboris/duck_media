/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	coverageDirectory: "coverage",
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mock__/fileMock.ts",
		"^.+\\.s?css$": "identity-obj-proxy",
		"^@public(.*)$": "<rootDir>/public/$1",
		"^@features(.*)$": "<rootDir>/src/features/$1",
		"^@components(.*)$": "<rootDir>/src/components/$1",
		"^@styles(.*)$": "<rootDir>/src/styles/$1",
		"^@data(.*)": "<rootDir/src/data/$1>"
	},
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {
			tsconfig: 'tsconfig.test.json'
		}],
		'^.+\\.ts?$': ['ts-jest', {}],
	},
	testMatch: [
		'<rootDir>/src/**/__test__/**/*.test.{ts,tsx}',
	]
};