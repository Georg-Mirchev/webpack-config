module.exports = (api) => {
    api.cache(true);
    const plugins = ["@babel/plugin-transform-runtime"];

    const presets = [
        [
            "@babel/preset-env", 
            {
                "useBuiltIns": "usage",
                "corejs": { 
                    "version": 3, 
                    "proposals": true 
                },
                "debug": process.env.NODE_ENV === "production"
            }
        ]
    ]

    return {
        presets,
        plugins
    }
};