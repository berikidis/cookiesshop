import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        nextui(),
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/typography'),
    ],
}
export default config
