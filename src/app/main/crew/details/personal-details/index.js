import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React,{ useState } from 'react';
import BodyContent from './BodyContent';
import LeftSidebarContent from './../LeftSidebarContent';

import ToolbarContent from "./ToolbarContent";
import { AppBar, Toolbar, Typography, Button, DialogActions, DialogContent } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	layoutRoot: {
		header: {
			height: '5rem'
		}
	}
}));

function PersonalDetailsPage(props) {
	const classes = useStyles(props);
	const [ state, setState ] = useState({});

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="px-24 flex items-center">
					<h4>Edit / View Crew > Personal Details</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<ToolbarContent state={state} setState={setState}/>
				</div>
			}
			content={
				<div className="p-24">
					<BodyContent state={state} setState={setState}/>
				</div>
			}
			leftSidebarContent={<LeftSidebarContent />}	
			sidebarInner
		/>
	);
}

export default PersonalDetailsPage;
