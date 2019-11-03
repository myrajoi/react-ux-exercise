import React, { useEffect, useState } from 'react';
import { Grid } from "@material-ui/core";
import FilterBar from "./FilterBar";
import ControlList from "./ControlList";
import { Redirect, Route } from "react-router-dom";
import getControls from "../api";
import ControlMain from "./ControlMain";

const ListContainer = () => {
	const [controls, setControls] = useState(controls);
	const [filteredStatuses, setFilteredList] = useState([]);

	const getData = async () => {
		await getControls().then((controls) => {
			setControls(controls);
			setFilteredList(controls);
		});
	};

	const getClassName = (c) => {
		return c.state ? (c.state.isImplemented ? 'implemented' : 'not-implemented') : 'unknown';
	};

	const findControls = (match) => {
		return controls.find( c => c.id.toString() === match.params.controlId );
	};

	useEffect(() => {
		if (!filteredStatuses.length) {
			getData().then();
		}
	}, [filteredStatuses]);

	return <Grid container>
		{controls &&
		<>
			<Grid item lg={12} className={"grid-header"}>
				<h1>Implementation Assessment</h1>
				<h2>Evaluate the implementation status of your security controls.</h2>
			</Grid>
			<Grid item lg={12}>
				<FilterBar
					controls={controls}
					setControls={setControls}
					setFilteredList={setFilteredList}
				/>
			</Grid>
			<Grid item lg={8} className={"box-shadow"}>
				<ControlList
					controls={filteredStatuses}
					getClassName={ getClassName }
				/>
			</Grid>
			<Grid item lg={4} style={{padding: "18px"}}>
				<Route exact path='/' render={() => (
					<Redirect to={{ pathname: `/controls/${controls[0].id }`}}/>
				)}/>
				<Route path='/controls/:controlId' render={({ match }) => (
					<ControlMain
						control={ findControls(match) }
						getClassName={ getClassName }
					/>
				)}/>
			</Grid>
		</>
		}
	</Grid>;
};


export default ListContainer;
