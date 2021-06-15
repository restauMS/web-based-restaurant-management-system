const express = require('express');
const Router = express.Router();
const {compare, hash} = require('bcrypt');
const jwt = require('jsonwebtoken');

// Services
const Authenticate = require('../../services/admin/admin.auth');
const Register = require('../../services/admin/admin.register');
const Sales = require('../../services/admin/admin.sales');
const Sessions = require('../../services/admin/admin.sessions');
const AdminInformation = require('../../services/admin/admin.info');

// Middleware for Authenticating Token
const AuthenticateToken = (Request, Response, Next) => {
    const AuthenticationHeader = Request.headers['authorization'];
    const Token = AuthenticationHeader && AuthenticationHeader.split(' ')[1];
    Token == null ? Response.sendStatus(401) : jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (Error, {Username, Password}) => {
        Error ? Response.sendStatus(403) : 
        Request.Username = Username;
        Request.Password = Password;
        Next();
    }) 
};

Router.get('/Sessions', AuthenticateToken, async(Request, Response) => {
    try {
        const GetSessions = await Sessions();
        if(Sessions){
            Response.status(200).send({
                "Status": true,
                "StatusDescription": "Fetching Order sessions list is successful",
                SalesData: GetSessions
            })
        }
    } catch (error) {
        
    }
});

Router.post('/AdminData', AuthenticateToken, async(Request, Response) => {
    try {
        const { Username } = Request.body;
        const GetAdminInformation = await AdminInformation(Username);
        if(GetAdminInformation){
            Response.status(200)
            .send({
                "Status": "Successful!",
                "Data": GetAdminInformation
            });
        }
        else {
            Response.status(500)
            .send({
                "Status": GetAdminInformation,
                "StatusDescription": "Something went wrong, my apologies...",
            })
        }
    } catch (error) {
        Response.status(500)
        .send({
            "Status": false,
            "StatusDescription": "Something went wrong, my apologies...",
            "Error": error
        });
    }
});

Router.post('/GetSales', AuthenticateToken, async(Request, Response) => {
    try {
        const GetSales = await Sales();
        if(GetSales){
            Response.status(200).send({
                "Status": true,
                "StatusDescription": "Fetching Sales information is successful",
                SalesData: GetSales
            })
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/Authenticate', async(Request, Response) => {
        try {
            const { Username, Password } = Request.body;
            const Auth = await Authenticate(Username);
            if(Auth) {
                if(await compare(Password, Auth[0].password)) {
                    const AccessToken = jwt.sign({ Username, Password }, process.env.ACCESS_TOKEN_SECRET);
                    Response.status(200)
                    .send(
                        {
                            "Status": true,
                            "StatusDescription": "Login Authentication Successful",
                            "Username": Username,
                            "AccessToken": AccessToken
                        }
                    )
                } 
                else {
                    Response.send(403)
                    .send(
                        {
                            "Status": false,
                            "StatusDescription": "Login Unsuccessful, password or username is incorrect"
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
                console.trace(error);
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
        console.trace(error);
    }
});

module.exports = Router;