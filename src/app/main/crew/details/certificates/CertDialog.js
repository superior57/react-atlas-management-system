import React,{} from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid, Button, Dialog, DialogContent, DialogActions, Toolbar, Typography, AppBar } from "@material-ui/core";
import clsx from "clsx";
import { isEmpty } from "app/functions";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "app/store/fuse/dialogSlice";

const contentsLeft = [
    {
        type: "text",
        label: "Certification",			
    },
    {
        type: "select",
        label: "S",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "text",
        label: "Number",			
    },
    {
        type: "date",
        label: "Issued",			
    },
    {
        type: "date",
        label: "Expired",			
    },
    {
        type: "select",
        label: "Issue Country",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },		
    {
        type: "select",
        label: "On Vsl",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
];

const CertDialog = (props) => {
    const { dialog } = useSelector(state => state.fuse);
    const {certificiates} = useSelector(state => state.crewApp.crew_details);

    console.log("recet => ", dialog);    

    const dispatch = useDispatch();
    const [state, setState] = React.useState({
    });

    React.useEffect(() => {
        if( dialog.type == "Edit" ) {
            setState(certificiates.recent);
            console.log(state);
        } 

        // if( dialog.type == "New" ) {
        //     setState({});
        // }
    }, [dialog]);

    const handleChange = (e) => {
        console.log(e.target.name);
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
		// if(dialog.type == "New")
        //     dispatch(addRank(state));
        // else if (dialog.type == "Edit")
        //     dispatch(updateRank(state));
        // handleClose();
	};

    const handleClose = () => {
        dispatch(closeDialog())
    }

    const Contents = (content, index, contentId) => {
        switch (content.type) {
            case 'text' : return (
                <TextField 
                    variant="outlined"
                    label={content.label}
                    className="w-full mb-16 mr-5"
                    size="small"
                    key={index}	
                    value={isEmpty(state[`${content.name}`])}	
                    name={`${content.name}`}
                    onChange={handleChange}
                />)
            case 'select' : return (
                <FormControl variant="outlined" className={clsx("w-full mr-5 mb-16")} size="small" key={index}>
                    <InputLabel id={`select-label-${index}`}>{content.label}</InputLabel>
                    <Select
                        labelId={`select-label-${index}`}
                        value={isEmpty(state[`${content.name}`])}
                        onChange={handleChange}
                        label={content.label}
                        name={`${content.name}`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            content.children.map((item, i) => <MenuItem value={i+1} key={i}>{item}</MenuItem>)
                        }
                    </Select>
                </FormControl>)
            case 'date' : return (
                <TextField 
                    variant="outlined"
                    label={content.label}
                    className="w-full mb-16 mr-5"
                    size="small"
                    key={index}	
                    value={isEmpty(state[`${content.name}`])}	
                    name={`${content.name}`}
                    onChange={handleChange}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />)
        };
    };

    
    return (
        <Dialog
            open={dialog.state}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            classes={{
                paper: 'rounded-8'
            }}
        >
            {
                state && <>
                    <AppBar position="static" elevation={1}>
                        <Toolbar className="flex w-full">
                            <Typography variant="subtitle1" color="inherit">
                                {dialog.options.type} Crew Certificate
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>
                        <Grid container spacing={1}  style={{ minWidth: '50rem' }}>
                            <Grid item xs={12}>
                                {
                                    contentsLeft && contentsLeft.map((content, index) => Contents(content, index, "left"))
                                }						
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleSave()} variant="contained" className="text-white bg-green-400 hover:bg-green-500">
                            Save
                        </Button>
                        <Button onClick={()=> handleClose()} variant="contained" className="text-white bg-red-400 hover:bg-red-500">
                            Cancel
                        </Button>
                    </DialogActions>
                </>
            }
        </Dialog>)
}

export default CertDialog;