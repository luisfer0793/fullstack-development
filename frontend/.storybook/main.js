module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  staticDirs: [
    'https://fonts.googleapis.com/css2?family=Outfit&family=Work+Sans:wght@500;600&display=swap',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
