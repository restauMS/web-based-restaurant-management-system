import React from 'react'

// Component Imports
import { DashboardButton as NavButton } from '../../../../common/Button/Button';

// Asset Imports
import Logo from '../../../../../assets/restoms-logo/logo.png';
import Home from '../../../../../assets/button-assets/dashboard-related/home.png';
import Orders from '../../../../../assets/button-assets/dashboard-related/orders.png';
import Products from '../../../../../assets/button-assets/dashboard-related/products.png';
import Sales from '../../../../../assets/button-assets/dashboard-related/sales.png';
import Settings from '../../../../../assets/button-assets/dashboard-related/settings.png';
import Logout from '../../../../../assets/button-assets/dashboard-related/logout.png';

// Styling Imports
import "./style/Navigation.scss";

const NavButtonGroup = [
    {
        Contrast: true,
        ImageProperties: {
            src: Home,
            alt: "An image of a House",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard'
    },
    {
        Contrast: true,
        ImageProperties: {
            src: Orders,
            alt: "An image of a Paper sheet with writings",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard'
    }
    ,
    {
        Contrast: true,
        ImageProperties: {
            src: Products,
            alt: "An image of an opened box",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard'
    }
    ,
    {
        Contrast: true,
        ImageProperties: {
            src: Sales,
            alt: "An image of a stack of coins",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard'
    }
    ,
    {
        Contrast: true,
        ImageProperties: {
            src: Settings,
            alt: "An image of a Cog",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard'
    }
]

const AdminDashboardNavbar = (props) => {
    return (
        <div className="Navigation">
            <img className="Logo" src={Logo} alt="" height="50px" width="50px"/> 
            {/*  
                * Refactor later...
            */}
            <div className="NavButtonGroup">
                {
                    NavButtonGroup.map((Props, key) => 
                        <NavButton
                            key = {key}
                            isButtonContrast = {Props.Contrast}
                            ButtonImageProps = {Props.ImageProperties}
                            Route = {Props.Route}
                        />
                        )
                }
            </div>
            
            <NavButton
                    className = "ExitButton"
                    isButtonContrast = {true}
                    ButtonImageProps = {
                        {
                            src: Logout,
                            alt: "An image of a door with an arrow pointing left",
                            height: "25px",
                            width: "25px"
                        }
                    }
                    Route = "/Admin/Dashboard"
            />

        </div>
    )
}

export default AdminDashboardNavbar
