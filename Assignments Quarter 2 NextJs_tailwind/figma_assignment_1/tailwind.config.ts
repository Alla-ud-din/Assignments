import type { Config } from 'tailwindcss'
import tick from "./src/assets/Group 172.svg"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      listStyleType: {
        'custom-bullet': 'none', // Remove default bullets
      },
      pseudoClasses: {
        'li-icon::before': {
          content: 'url(./src/assets/Group 172.svg)', // Replace with your desired symbol
          fontSize: '16px',
          color: '#ff9900', // Your preferred color
          marginRight: '8px',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  },
}
export default config
