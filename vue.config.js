module.exports = {

  devServer: {
    proxy: {
      '/api' :{
        target: 'http://localhost:8180',
        changeOrigin:true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
