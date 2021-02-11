const express = require('express');
const Router = express.Router();
const {compare, hash} = require('bcrypt');
// Services
const Authenticate = require('../../services/worker/worker.auth');
const Register = require('../../services/worker/worker.register');
const FetchOrderQueue = require('../../services/worker/worker.fetchOrderQueue');

Router.post('/Authenticate', async(Request, Response) => {
    try {
        const {Username, Password} = Request.body;
        const Auth = await Authenticate(Username);
        if (Auth) {
            if(await compare(Password, Auth[0].salesperson_password)){
                Response.status(200)
                .send(
                    {
                        "Status": true,
                        "StatusDescription": "Login Successful"
                    }
                );
            }
            else {
                Response.status(403)
                .send(
                    {
                        "Status": false,
                        "StatusDescription": "Login Unsuccesful, Password is incorrect"
                    }
                );
            }
        } else {
            Response.status(500)
            .send({
                "Status": Auth,
                "StatusDescription": "Username not found, operation failed."
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/Register', async(Request, Response) => {
    try {
        const {Username, Password, Fullname, Contact, Address} = Request.body;
        const EncryptedPassword = await hash(Password, 10);
        const PushWorkerData = await Register(Username, EncryptedPassword, Fullname, Contact, Address);
        if (PushWorkerData) {
            Response.status(200)
            .send(
                {
                    "Status": PushWorkerData,
                    "StatusDescription": "Registration successful!"
                })
        } else {
            Response.status(500)
            .send(
                {
                    "Status": PushWorkerData,
                    "StatusDescription": "Something went wrong, operation failed."
                }
            )
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