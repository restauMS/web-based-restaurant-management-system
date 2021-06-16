const express = require('express');
const Router = express.Router();

// Inventory services
const GetList = require('../../services/inventory/inventory.list');
const RemoveItem = require('../../services/inventory/inventory.remove');
const AddItem = require('../../services/inventory/inventory.new');

Router.post('/Remove', async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const Result = await RemoveItem(Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Item is deleted successfully!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Something went wrong! Item was not deleted!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/New', async(Request, Response) => {
    try {
        const {Name, Type, InitQty, InitPrice} = Request.body;
        const Result = await AddItem(Name, Type, InitQty, InitPrice);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Item added successfully!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Something went wrong, Item was not added!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.get('/List', async(Request, Response) => {
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