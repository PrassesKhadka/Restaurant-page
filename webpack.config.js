const path=require('path')
const { resourceUsage } = require('process')
module.exports={
    entry:"./src/index.js",
    mode:'development',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                use:['url-loader']
            }
        ]
    },
    devtool:'inline-source-map',

}