const express = require('express');
const Router = express.Router();

// Services
const Authenticate = require('../../services/admin/admin.auth');

// ! Very bad smelly authentication
Router.post('/Authenticate', async(Request, Response) => {
        try {
            const { Username, Password } = Request.body;
            const Auth = await Authenticate(Username, Password);
            if (Auth) {
                Response.status(200)
                .send(Auth);
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

module.exports = Router;