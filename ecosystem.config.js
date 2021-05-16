module.exports = {
    apps: [{
        name: 'server',
        script: './build/app.js',
        env: {
            isProd: true
        }
    }]
};