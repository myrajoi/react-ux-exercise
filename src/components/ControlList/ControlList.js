import React,  { useState } from 'react';
import './List.scss';
import { Link } from 'react-router-dom';
import { Box, Grid, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import StatusImage from "../StatusImage";

const ControlList = ({ controls, getClassName }) => {
	const [selectedID, setSelectedID] = useState(null);

	return (
		<Grid container item lg={12}>
			<div className={'control-header'}>CONTROLS</div>
			<Table className={'background-white'}>
				<TableHead className={'App-table-header'}>
					<TableRow>
						<TableCell>CONTROL</TableCell>
						<TableCell>DESCRIPTION</TableCell>
						<TableCell><Box textAlign="right">STATUS</Box></TableCell>
					</TableRow>
				</TableHead>
				<TableBody className={'App-table-body'}>
					{controls.map((c) => (
						<TableRow key={c.id}
						          className={'App-table'}
						          selected={selectedID === c.id}
						          hover={selectedID !== c.id}>
							<TableCell className={'no-wrap'}>
								<Link to={`/controls/${c.id}`}
								      className={'link-style'}
								      onClick={() => {
									      setSelectedID(c.id);
								      }}
								>{c.name}</Link>
							</TableCell>
							<TableCell>{c.text}</TableCell>
							<TableCell style={{minWidth: '130px'}}>
								<StatusImage
									state={c.state}
									className={getClassName(c)}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Grid>
	)
};

export default ControlList;

