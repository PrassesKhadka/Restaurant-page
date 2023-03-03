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
            //To load CSS
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            //To load images 
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset',
                // use:['url-loader']
            },
            //To load Fonts
            {
                test:/\.(woff|woff2|eot|tff|otf)$/i,
                type:'asset',
            },
        ]
    },
    devtool:'inline-source-map',

}