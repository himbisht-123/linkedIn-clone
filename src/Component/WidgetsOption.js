import React from 'react'
import '../Styling/WidgetsOption.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function WidgetsOption({heading,subtitle}) {
    return (
        <div className="widgetOption">
            <div className="widgetOption-articleLeft">
             <FiberManualRecordIcon/>
            </div>
            <div className="widgetOption-articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default WidgetsOption
