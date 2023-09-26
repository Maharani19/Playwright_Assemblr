module.exports = async config => {
    if (process.env.test_env) {
        require('dotenv').config({
            path: `helper/env/.env.${process.env.test_env}`,
            override: true
        });
    }
};
