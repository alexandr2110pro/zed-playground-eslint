import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  displayName: '@org/web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/web',
  testEnvironment: 'jsdom',
  detectOpenHandles: true,
  forceExit: true,
};

export default createJestConfig(config);
