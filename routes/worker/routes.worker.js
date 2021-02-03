const express = require('express');
const Router = express.Router();

// Services
const Authenticate = require('../../services/worker/worker.auth');
const FetchOrderQueue = require('../../services/worker/worker.fetchOrderQueue');


// ! Very bad smelly authentication
Router.post('/Authenticate', async(Request, Response) => {
    try {
        const {Username, Password} = Request.body;
        const Auth = await Authenticate(Username, Password);
        if (Auth) {
            Response.status(200)
            .send(Auth);
        } else {
            Response.status(500)
            .send({
                "Status": Auth,
                "StatusDescription": "Something went wrong, operation failed."
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/FetchOrderQueue', async(Request, Response) => {
    try {
        const OrderQueue = await FetchOrderQueue();
        if(OrderQueue){
            Response.status(200)
            .send(OrderQueue)
        }
        else {
            Response.status(500)
            .send({
                'Status': OrderQueue,
                'StatusDescpription': 'Something went wrong, operation failed.'
            })
        }

    } catch (error) {
        console.trace(error);
    }
});

module.exports = Router;