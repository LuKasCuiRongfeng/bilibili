module.exports = {
    publicPath: process.env.NODE_ENV === "production" ?
        "./" : "/",
    outputDir: "dist",
    assetsDir: "static",
    indexPath: "index.html",
    filenameHashing: false,
    devServer: {
        open: true,
        port: 10000,
        host: "127.0.0.1",
        proxy: {
            "/gettest": {
                target: "http://localhost:20000",
                ws: true,
                changeOrigin: true
            }
        }
    }
}