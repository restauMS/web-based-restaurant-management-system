import React from 'react';
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';

const Inventory = () => {
    return (
        <div className = "InventoryContainer">
            <Label
                LabelContent = "Inventory"
                isLabelContrast = {true}
            />
        </div>
    );
};

export default Inventory;
