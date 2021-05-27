export default {
  transform: { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" },
  testEnvironment: 'node',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};