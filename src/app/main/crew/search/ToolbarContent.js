import React, {} from "react";
import { Icon, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 3,
        minWidth: 570,
        '& Button': {
            color: '#FFF',
            marginRight: 3,
        }
    },
    addButton: {
        zIndex: 99
    }
}));



const ToolbarContent = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const crew = useSelector(state => state.crewApp.crew.recent);
    // handles... 
    const handleView = (event) => {
        if(crew) {
            history.push(`/crew/details/${crew.id}/personal-details`);
        }
    }

    return <React.Fragment>
        <div className={clsx(classes.root, "w-full flex")}>
            <Button variant="contained" color="secondary">
                <Icon>add</Icon> New Crew
            </Button>
            <Button variant="contained" color="secondary" onClick={event => handleView(event)}>
                <Icon>rate_review</Icon> View
            </Button>
            <Button variant="contained" color="secondary">
                <Icon>delete</Icon> Delete
            </Button>
            <Button variant="contained" color="secondary">
                <Icon>print</Icon> Print
            </Button>
            <Button variant="contained" color="secondary">
                <Icon>assignment_returned</Icon> Export
            </Button>
        </div>
    </React.Fragment>
};

export default ToolbarContent;