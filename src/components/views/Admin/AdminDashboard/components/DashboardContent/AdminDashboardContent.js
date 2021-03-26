import React from 'react'

// Component Imports
import ContentLabel from '../../../../../common/Label/Label';

const AdminDashboardContent = (props) => {
    return (
        <div className="Content">
            <div>
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = {`Hello, ${props.AdminName}`}
                    Style = {{fontSize: '24px', textAlign: "start"}}
                />
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = 'Dashboard'
                    Style = {{textAlign: "start"}}
                />
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = {`Authentication Type: ${props.AuthType}`}
                    Style = {{fontSize: '24px', textAlign: "start"}}
                />
                <ContentLabel
                    isLabelContrast = {true}
                    LabelContent = {`Authentication Token: ${props.AuthToken}`}
                    Style = {{fontSize: '8px', textAlign: "start"}}
                />
            </div>
            
        </div>
    )
}

export default AdminDashboardContent;