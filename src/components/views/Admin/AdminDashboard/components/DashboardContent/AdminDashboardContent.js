import React from 'react'
import { Switch } from 'react-router';

// Component Imports
import ContentLabel from '../../../../../common/Label/Label';
import ControllerRouter from '../../../../../routers/Controller';

// Styling Import
import "./style/Content.scss";

const AdminDashboardContent = ({routes, AdminName, AuthType, AuthToken}) => {
    return (
        <div className="Content">
            <div>
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = {`Hello, ${AdminName}`}
                    Style = {{fontSize: '24px', textAlign: "start"}}
                />
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = 'Dashboard'
                    Style = {{textAlign: "start"}}
                />
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = {`Authentication Type: ${AuthType}`}
                    Style = {{fontSize: '24px', textAlign: "start"}}
                />
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = {`Authentication Token: ${AuthToken}`}
                    Style = {{fontSize: '8px', textAlign: "start"}}
                />
                <Switch>
                    {
                        routes.map((routes, key) => (
                            <ControllerRouter
                                key = {key}
                                {...routes}
                            />
                        ))
                    }
                </Switch>
            </div>
            
        </div>
    )
}

export default AdminDashboardContent;