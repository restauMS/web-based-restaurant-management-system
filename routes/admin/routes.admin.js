const express = require('express');
const Router = express.Router();
const {compare, hash} = require('bcrypt');

// Services
const Authenticate = require('../../services/admin/admin.auth');
const Register = require('../../services/admin/admin.register');

Router.post('/Authenticate', async(Request, Response) => {
        try {
            const { Username, Password } = Request.body;
            const Auth = await Authenticate(Username);
            if(Auth) {
                if(await compare(Password, Auth[0].admin_password)) {
                    Response.status(200)
                    .send(
                        {
                            "Status": true,
                            "StatusDescription": "Login Successful"
                        }
                    )
                }
                else {
                    Response.send(403)
                    .send(
                        {
                            "Status": false,
                            "StatusDescription": "Login Unsuccessful, password is incorrect"
                        }
                    )
                }
            }
            else {
                Response.status(500)
                .send({
                    "Status": Auth,
                    "StatusDescription": "Username not found, operation failed!"
                })
            }
            } catch (error) {
            console.trace('Something went wrong: ', error);
            }
});

Router.post('/Register', async(Request, Response) => {
    try {
        const { Username, Password, Fullname, Contact, Address } = Request.body;
        const EncryptedPassword = await hash(Password, 10);
        const AdminData = await Register(Username, EncryptedPassword, Fullname, Contact, Address);
        if(AdminData){
            Response.status(200)
            .send(
                {
                    "Status": AdminData,
                    "StatusDescription": "Admin registration is successful"
                }
            );
        }
        else {
            Response.status(500)
            .send(
                {
                    "Status": AdminData,
                    "StatusDescription": "Something went wrong, operation failed!"
                }
            )
        }
    } catch (error) {
        console.trace('Something went wrong: ', error);
    }
})

module.exports = Router;