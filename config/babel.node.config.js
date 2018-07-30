const util = require('../util');
const merge = require('webpack-merge');

module.exports = merge({
    "presets": [
        [require.resolve('babel-preset-env'), {
            "targets": {
                "node": "current"
            }
        }], require.resolve('babel-preset-flow')
    ],
    "plugins": [
        require.resolve("babel-plugin-transform-async-generator-functions"),
        require.resolve("babel-plugin-transform-async-to-generator"),
        require.resolve("babel-plugin-transform-class-properties"),
        require.resolve("babel-plugin-transform-do-expressions"),
        require.resolve("babel-plugin-transform-export-extensions"),
        require.resolve("babel-plugin-transform-function-bind"),
        require.resolve("babel-plugin-transform-object-assign"),
        require.resolve("babel-plugin-transform-object-rest-spread"),
        require.resolve("babel-plugin-transform-react-jsx"),
        require.resolve("babel-plugin-transform-regenerator"),
        require.resolve("babel-plugin-transform-runtime")
    ]
}, util.getBabelCustomConfig())