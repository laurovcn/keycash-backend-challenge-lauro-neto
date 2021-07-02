const express = require('express')
const app = express()
const models = require('./models/index.js');
const routes = require('./routes/propertys.routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const port = 3000

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/v1", routes);

models.sequelize
    .sync()
    .then(function () {
        console.log('Nice! The database looks fine.');
    })
    .catch(function (err) {
        console.log(err, 'Sorry, but something went wrong with the database update.');
    });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})