const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const Customer = require('./routes/customer/routes.customer');
const Worker = require('./routes/worker/routes.worker');
const Admin = require('./routes/admin/routes.admin');
// const Inventory = require('./routes/inventory/routes.inventory');

/* 
    ! Not needed atm
    ! Use only for Deployment/Production
    ! To serve static files via Express
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });
*/

app.use('/API/Customer', Customer);
app.use('/API/Worker', Worker);
app.use('/API/Admin', Admin);
// app.use('/API/Secret/Inventory', Inventory);

app.listen(PORT, () => {
    console.log(`API Server is listening at http://localhost:${PORT}`);
});