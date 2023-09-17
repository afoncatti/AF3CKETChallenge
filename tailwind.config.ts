import type { Config } from 'tailwindcss'
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#452F86',
        accent: '#A2D6D6',
        secondary: '#321E5D',
        'primary-grey': '#7D7984'
      }
    }
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['lucide'])
    })
  ]
}
