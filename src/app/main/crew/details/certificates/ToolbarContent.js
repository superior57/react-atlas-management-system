import React, {} from "react";
import { Fab, Icon, IconButton, Button, TableContainer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
    return <React.Fragment>
        <div className={clsx(classes.root, "w-full flex")}>
            <Button variant="contained" color="secondary">
                <Icon>add</Icon> New Crew
            </Button>
            <Button variant="contained" color="secondary">
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