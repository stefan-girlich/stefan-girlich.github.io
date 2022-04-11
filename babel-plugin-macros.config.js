const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  'fontawesome-svg-core': {
    license: 'free',
  },
  styledComponents: {
    displayName: isDev,
  },
}
