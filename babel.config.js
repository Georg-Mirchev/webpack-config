module.exports = {
    "presets": [
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
};