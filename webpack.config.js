module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                loader: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    }
}