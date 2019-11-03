import React, { useState } from 'react';
import '../Status.scss';
import { ButtonGroup, Button, withStyles } from "@material-ui/core";
import Implemented from '../assets/images/implemented-icon.svg';
import NotImplemented from "../assets/images/not-implemented-icon.svg";
import Unknown from "../assets/images/unknown-icon.svg";

const StyledButton = withStyles({
	root: {
		'&:focus': {
			backgroundColor: '#f6f9ff'
		},
		'&:hover': {
			backgroundColor: '#e7f1ff',
			color: '#107eff'
		},
		boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.11)',
		border: '1px solid #c9d7ed',
		fontSize: '11px',
		fontWeight: 'bold',
		color: '#627699',
	}

})(Button);

const FilterBar = ({ controls, setControls, filteredStatuses, setFilteredList }) => {

	const [status, setStatus] = useState('');

	const isImplemented = () => {
		return controls.filter((c) => (c.state && c.state.isImplemented)).length;
	};

	const isNotImplemented = () => {
		return controls.filter((c) => (c.state && !c.state.isImplemented)).length;
	};

	const isUnknown = () => {
		return controls.filter((c) => (!c.state)).length;
	};

	const calculatePercentage = (count, total) => {
		return Math.round((count / total) * 100) + '%';
	};

	const filterStatuses = (statusFilter) => {

		let filteredList = controls;
		switch (statusFilter) {
			case 'all':
				// setStatus('all');
				console.log(status);
				setFilteredList(filteredList);
				break;
			case 'unknown':
				// setStatus('unknown');
				console.log(status);
				let unknownList = filteredList.filter((c) => typeof c.state === 'undefined');
				setFilteredList(unknownList);
				break;
			case 'implemented':
				let implementedFilteredList = filteredList.filter((c) => c.state && c.state.isImplemented);
				setFilteredList(implementedFilteredList);
				// setStatus('implemented');
				console.log(status);
				break;
			case 'not_implemented':
				let notImplementedFilteredList = filteredList.filter((c) => c.state && !c.state.isImplemented);
				setFilteredList(notImplementedFilteredList);
				// setStatus('not_implemented');
				console.log(status);
				break;

			default:
				setFilteredList(filteredList);
		}

		setStatus(statusFilter);
	};

	return (
		<div className={'filter-bar'}>
			Filter Controls:
			<span style={{marginLeft: '12px'}}>
				<ButtonGroup size="small" aria-label="small outlined button group">
                <StyledButton
	                onClick={() => { filterStatuses('all'); }}>
	                All {controls.length} Controls
                </StyledButton>
                <StyledButton
	                onClick={() => { filterStatuses('implemented'); }}>
                    <img src={Implemented} alt={'Implemented'}/>
	                <span>{isImplemented()} Implemented</span>
                    <span style={{color: '#93b0d2'}}>{calculatePercentage(isImplemented(), controls.length)}</span>
                </StyledButton>
                <StyledButton
	                onClick={() => { filterStatuses('not_implemented'); }}>
                    <img src={NotImplemented} alt={'Not Implemented'}/>
	                <span>{isNotImplemented()} Not Implemented</span>
                    <span style={{color: '#93b0d2'}}>{calculatePercentage(isNotImplemented(), controls.length)}</span>
                </StyledButton>
                <StyledButton
	                onClick={() => { filterStatuses('unknown')} }>
                    <img src={Unknown} alt={'Unknown'}/>
	                <span>{isUnknown()} Unknown</span>
                    <span style={{color: '#93b0d2'}}>{calculatePercentage(isUnknown(), controls.length)}</span>
                </StyledButton>
				</ButtonGroup>
            </span>
		</div>
	)
};

export default FilterBar;
