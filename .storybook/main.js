const path = require('path')
module.exports = {
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /.css$/,
      loaders: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './.storybook',
            },
          },
        },
      ],
      include: path.resolve(__dirname, '..', 'src/components'),
    })
    return config
  },
}
