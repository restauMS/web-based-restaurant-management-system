require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.API_SERVER || 3001;
const path = require('path');

app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const Customer = require('./routes/customer/routes.customer');
const Worker = require('./routes/worker/routes.worker');
const Admin = require('./routes/admin/routes.admin');
const Inventory = require('./routes/inventory/routes.inventory');

app.use(express.static(path.join(__dirname, 'restoms-client/build')));
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'restoms-client/build', 'index.html'));
});

app.use('/API/Customer', Customer);
app.use('/API/Worker', Worker);
app.use('/API/Admin', Admin);
app.use('/API/Inventory', Inventory);

app.listen(app.get('port', () => {
    console.log(`API Server is listening at PORT = ${PORT}`);
}));
