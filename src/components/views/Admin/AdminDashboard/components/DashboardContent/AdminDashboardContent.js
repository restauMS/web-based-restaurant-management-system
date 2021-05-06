import React from 'react'
import { Switch } from 'react-router-dom';

// Component Imports

import ControllerRouter from '../../../../../routers/Controller';

// Styling Import
import "./style/Content.scss";

const AdminDashboardContent = ({routes}) => {
    return (
        <div className="Content">
                <Switch>
                    {
                        routes.map((route, key) => (
                            <ControllerRouter
                                key = {key}
                                {...route}
                            />
                        ))
                    }
                </Switch>
        </div>
    )
}

export default AdminDashboardContent;