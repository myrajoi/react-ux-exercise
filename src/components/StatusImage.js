import React from 'react';
import NotImplemented from '../assets/images/not-implemented-icon.svg';
import Implemented from '../assets/images/implemented-icon.svg';
import Unknown from '../assets/images/unknown-icon.svg';
import {Box} from "@material-ui/core";

const StatusImage = ({ state, className }) => {
	return (
		<>
		<img src={state ? (state.isImplemented ? Implemented : NotImplemented) : Unknown}
		     alt='Not Implemented'
		     className={className}/>
			<Box textAlign="right"
			     className={className}>
				{state ? (state.isImplemented ? 'IMPLEMENTED' : 'NOT IMPLEMENTED') : 'UNKNOWN'}
			</Box>
		</>
	)
};

export default StatusImage;
