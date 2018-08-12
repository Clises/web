const path = require('path');

//处理html

//js处理
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
       }
     ]
   }
};
