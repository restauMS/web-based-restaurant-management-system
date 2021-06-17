const express = require('express');
const Router = express.Router();
const {compare, hash} = require('bcrypt');
const jwt = require('jsonwebtoken');

// Services
const Authenticate = require('../../services/admin/admin.auth');
const Register = require('../../services/admin/admin.register');
const { AllSessions , ActiveSessions, EndSession, ClearSession } = require('../../services/admin/admin.sessions');
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

Router.get('/SessionsActive', AuthenticateToken, async(Request, Response) => {
    try {
        const GetActiveSessions = await ActiveSessions();
        if(GetActiveSessions){
            Response.status(200)
            .send({
                "Status": true,
                "StatusDescription": "Fetching active Order sessions list is successful",
                "ActiveSessions": GetActiveSessions
            });
        } else { 
            Response.status(500)
            .send({
                "Status": false,
                "StatusDescription": "Fetch failed!",
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/EndSession', AuthenticateToken, async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const Result = await EndSession(Id);
        if(Result){
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Session successful, moved to archived!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Session unsuccessful, something went wrong!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.get('/ClearSessions', AuthenticateToken, async(Request, Response) => {
    try {
        const Clear = await ClearSession();
        if (Clear) {
            Response.status(200).send({
                "Status": Clear,
                "StatusDescription": "Order session list has been cleared!",
            });
        } else {
            Response.status(500).send({
                "Status": Clear,
                "StatusDescription": "Order session list has not been cleared, something went wrong!",
            });
        }
    } catch (error) {
        
    }
});

Router.get('/Sessions', AuthenticateToken, async(Request, Response) => {
    try {
        const GetSessions = await AllSessions();
        if(GetSessions){
            Response.status(200).send({
                "Status": true,
                "StatusDescription": "Fetching Order sessions list is successful",
                "Sessions": GetSessions
            });
        } else {
            Response.status(500)
            .send({
                "Status": false,
                "StatusDescription": "Fetch failed!",
            });
        }
    } catch (error) {
        console.trace(error);
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