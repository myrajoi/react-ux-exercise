import React from 'react';
import '../App.css';
import { Card, Box } from "@material-ui/core";
import Implemented from "../assets/images/implemented-icon.svg";
import NotImplemented from "../assets/images/not-implemented-icon.svg";
import Unknown from "../assets/images/unknown-icon.svg";

const ControlMain = ({ control, getClassName }) => (
	<Card className={'light-grey'}>
		<h1>{control.name}</h1>
		<h2>
			<span style={{ paddingRight: '4px' }}>STATUS</span>
			<span>
	            <img src={control.state ? (control.state.isImplemented ? Implemented : NotImplemented) : Unknown}
	                 alt='Not Implemented'
	                 className={getClassName(control)}/>
	            <Box textAlign="right"
	                 className={getClassName(control)}>
	                {control.state ? (control.state.isImplemented ? 'IMPLEMENTED' : 'NOT IMPLEMENTED') : 'UNKNOWN'}
	            </Box>
            </span>
		</h2>
		<p>{control.text}</p>
	</Card>
);

export default ControlMain;
