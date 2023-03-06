/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx,vue}'],
      theme: {
            extend: {},
      },
      plugins: [],
      safelist: [
            'text-2xl',
            'text-3xl',
            {
                  pattern: /(bg|border|text)-(red|green|blue|orange)-(100|200|300|400|500)/,
            },
      ],
}
