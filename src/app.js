const express = require('express');

class AppContoller {
    constructor() {
        this.express = express();
    }

    middlewaress() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes.js'));
    }
}

module.exports = new AppContoller().express;