const express = require('express');
const Router = express.Router();

// Services
const FetchTableData = require('../../services/customer/customer.pullAvailableTable');
const FetchMenuList = require('../../services/customer/customer.pullMenuList');
const PushLogData = require('../../services/customer/customer.pushLogData');
const PushOrderInformation = require('../../services/customer/customer.pushOrderInformation');

Router.post('/FetchAvailableTable', async(Request, Response) => {
    try {
        const TableData = await FetchTableData();
        if(TableData){
            Response.status(200)
            .send(TableData);
        }
        else {
            Response.status(500)
            .send({
                'Status': TableData
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/FetchMenuData', async(Request, Response) => {
    try {
        const MenuData = await FetchMenuList();
        if(MenuData){
            Response.status(200)
            .send(MenuData);
        }
        else {
            Response.status(500)
            .send({
                'Status': MenuData,
                'StatusDescription': 'Something went wrong, operation failed.'
            });
        }
    } catch (error) {
        console.trace(error)
    }
});

Router.post('/PushLogInformation', async(Request, Response) => {
    try {
        const {Name, Contact, Address, Table} = Request.body;
        const PushData = await PushLogData(Name, Contact, Address, Table);
        if(PushData){
            Response.status(200)
            .send({
                'Status': PushData,
                'StatusDescription': 'Customer Information has been logged and pushed to the database successfully'
            });
        }
        else {
            Response.status(500)
            .send({
                'Status': PushData,
                'StatusDescription': 'Something went wrong, data has not been logged'
            })
        }
    } catch (error) {
        console.trace(error)
    }
});

Router.post('/PushOrderSessionInformation', async(Request, Response) => {
    try {
        const {TotalQty, TotalPayable} = Request.body;
        const Order = await PushOrderInformation(TotalQty, TotalPayable);
        if(Order) {
            Response.status(200)
            .send({
                'Status': Order,
                'StatusDescription': 'Order Information has been successfully sent'
                }
            )
        }
        else {
            Response.status(500)
            .send({
                'Status': Order,
                'StatusDescription': 'Something went wrong, your order has been cancelled. Sorry for the inconvenience'
                }
            )
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.get('/TestRoute', (Request, Response) => {
    try {
        Response.send({'Status': 'Working...'});    
    } catch (error) {
        console.trace(error);
    }
});

module.exports = Router;