const express = require('express');
const Router = express.Router();

// Inventory services
const GetList = require('../../services/inventory/inventory.list');

Router.post('/List', async(Request, Response) => {
    try {
        const List = await GetList();
        if(List){
            Response.status(200)
            .send({
                'Status': true,
                'Description': 'Fetching list is Successful!',
                'List': List
            })
        } else {
            Response.status(500)
            .send({
                'Status': false,
                'Description': 'Fetching list is Unsuccessful!',
                'List': List
            })
        }
    } catch (error) {
        console.trace(error);
    }
});

module.exports = Router;