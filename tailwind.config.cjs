/* eslint-env node */
module.exports = {
  content: ['index.html', './src/**/*.{html,js,ts,vue}'],
  safelist: [
    'bg-t1-line',
    'bg-t2-line',
    'bg-t3-line',
    'bg-t4-line',
    'bg-indigo-300',
    'bg-pink-300',
    'bg-emerald-300',
    'bg-purple-300',
    'bg-indigo-600',
    'bg-pink-600',
    'bg-emerald-600',
    'bg-purple-600',
    'fill-indigo-600',
    'fill-pink-600',
    'fill-emerald-600',
    'fill-purple-600',
    'stroke-indigo-50',
    'stroke-pink-50',
    'stroke-emerald-50',
    'stroke-purple-50',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        'dm-sans': ['DM Sans'],
      },
      colors: {
        't1-line': '#D18725',
        't2-line': '#DF51A9',
        't3-line': '#61D03F',
        't4-line': '#68E3DF',
        'gray-dark': '#5E5E5E',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
