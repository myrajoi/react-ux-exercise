import React, { useState } from 'react';
import './Filter.scss';
import { ButtonGroup, Button} from "@material-ui/core";
import Implemented from '../../assets/images/implemented-icon.svg';
import NotImplemented from "../../assets/images/not-implemented-icon.svg";
import Unknown from "../../assets/images/unknown-icon.svg";


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
				setFilteredList(filteredList);
				break;
			case 'unknown':
				let unknownList = filteredList.filter((c) => typeof c.state === 'undefined');
				setFilteredList(unknownList);
				break;
			case 'implemented':
				let implementedFilteredList = filteredList.filter((c) => c.state && c.state.isImplemented);
				setFilteredList(implementedFilteredList);
				break;
			case 'not_implemented':
				let notImplementedFilteredList = filteredList.filter((c) => c.state && !c.state.isImplemented);
				setFilteredList(notImplementedFilteredList);
				break;

			default:
				setFilteredList(filteredList);
		}

		setStatus(statusFilter);
	};

	return (
		<div className={'filter-bar'}>
			Filter Controls:
			<span>
				<ButtonGroup size="small" aria-label="small outlined button group">
                <Button
	                onClick={() => { filterStatuses('all'); }}>
	                All {controls.length} Controls
                </Button>
                <Button
	                onClick={() => { filterStatuses('implemented'); }}>
                    <img src={Implemented} alt={'Implemented'}/>
	                <span>{isImplemented()} Implemented</span>
                    <span className={'percentage'}>{calculatePercentage(isImplemented(), controls.length)}</span>
                </Button>
                <Button
	                onClick={() => { filterStatuses('not_implemented'); }}>
                    <img src={NotImplemented} alt={'Not Implemented'}/>
	                <span>{isNotImplemented()} Not Implemented</span>
                    <span className={'percentage'}>{calculatePercentage(isNotImplemented(), controls.length)}</span>
                </Button>
                <Button
	                onClick={() => { filterStatuses('unknown')} }>
                    <img src={Unknown} alt={'Unknown'}/>
	                <span>{isUnknown()} Unknown</span>
                    <span className={'percentage'}>{calculatePercentage(isUnknown(), controls.length)}</span>
                </Button>
				</ButtonGroup>
            </span>
		</div>
	)
};

export default FilterBar;
