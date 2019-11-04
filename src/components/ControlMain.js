import React from 'react';
import '../App.css';
import { Card } from "@material-ui/core";
import StatusImage from "./StatusImage";

const ControlMain = ({ control, getClassName }) => (
	<Card className={'light-grey'}>
		<h1>{control.name}</h1>
		<h2>
			<span style={{ paddingRight: '4px' }}>STATUS</span>
			<span>
	            <StatusImage
		            state={control.state}
		            className={getClassName(control)}
	            />
            </span>
		</h2>
		<p>{control.text}</p>
	</Card>
);

export default ControlMain;
