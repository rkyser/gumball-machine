require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Gumball Machine',
    description: 'Open source licensing project.',
    head: {
      titleTemplate: 'Gumball Machine: %s',
      meta: [
        {name: 'description', content: 'Open source licensing project.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Gumball Machine'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Gumball Machine'},
        {property: 'og:description', content: 'Open source licensing project.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@rkyser & @riptide464c'},
        {property: 'og:creator', content: '@rkyser & @riptide464c'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
