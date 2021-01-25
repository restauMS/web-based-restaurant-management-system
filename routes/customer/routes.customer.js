const express = require('express');
const Router = express.Router();

// Services
const FetchTableData = require('../../services/customer/customer.fetchAvailableTable');


Router.post('/availabletable', async(Request, Response) => {
    try {
        const Data = await FetchTableData();
        if(Data){
            Response.status(200)
            .send(Data);
        }
        else {
            Response.status(500)
            .send({
                'Status': 'Failed'
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

module.exports = Router;