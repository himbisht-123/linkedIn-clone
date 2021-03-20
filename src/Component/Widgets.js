import React from 'react'
import '../Styling/Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import WidgetsOption from './WidgetsOption';
const Widgets=()=>{

   
    return (
        <div className="widgets">
            <div className="widgets-header">
              <h2>LinkedIn News</h2>
              <InfoIcon/>
            </div>
            <WidgetsOption heading="PAPA React is Back" subtitle="Top news - 9099 readers."/>
            <WidgetsOption heading="Coronavirus: US updates" subtitle="Top news - 2035 readers."/>
            <WidgetsOption heading="Tesla hits new highs" subtitle="Cars & auto - 300 readers."/>
            <WidgetsOption heading="Bitcoin breaks $54k" subtitle="Crypto - 4205 readers."/>
            <WidgetsOption heading="Is Redux too good" subtitle="Code - 123 readers."/>
            <WidgetsOption heading="Darton is learning React" subtitle="Top news - 24 readers."/>
        </div>
       
    )
}

export default Widgets
