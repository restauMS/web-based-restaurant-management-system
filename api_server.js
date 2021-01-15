const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
require('cors');

const Customer = require('./routes/customer/routes.customer');
const Worker = require('./routes/worker/routes.worker');
const Admin = require('./routes/admin/routes.admin');
const Inventory = require('./routes/inventory/routes.inventory');

app.use('/restoms/customer', Customer);
app.use('/restoms/worker', Worker);
app.use('/restoms/admin', Admin);
app.use('/restoms/secret/inventory', Inventory);

app.listen(PORT, () => {
    console.log(`API Server is listening at http://localhost:${PORT}`);
});