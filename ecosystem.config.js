module.exports = {
    apps: [{
      name: 'portFolio',
      script: 'app.js',
      watch: true,
      ignore_watch: [".git", "node_modules"],
      env: {
        PORT: 4500,
      },
    }]
  };
  