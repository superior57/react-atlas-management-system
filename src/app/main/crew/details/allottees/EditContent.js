import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { TextField, Select, InputLabel, MenuItem, FormControl, TableContainer, Paper } from "@material-ui/core";
import clsx from "clsx";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 300
    }
}));

function isEmpty(value) {
    return value ? value : "";
}
const minItemWidth = 40;

const EditContent = (props) => {
    const classes = useStyles(props);
    const [ state, setState ] = React.useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
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
                    value={isEmpty(state[`${contentId}_text_${index}`])}	
                    name={`${contentId}_text_${index}`}	
                    onChange={handleChange}
                />)
            case 'select' : return (
                <FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-16")} size="small" key={index}>
                    <InputLabel id={`select-label-${index}`}>{content.label}</InputLabel>
                    <Select
                        labelId={`select-label-${index}`}
                        value={isEmpty(state[`${contentId}_select_${index}`])}
                        onChange={handleChange}
                        label={content.label}
                        name={`${contentId}_select_${index}`}
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
                    value={isEmpty(state[`${contentId}_date_${index}`])}	
                    name={`${contentId}_date_${index}`}	
                    onChange={handleChange}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />)
            case 'textarea' : return (
                <TextField 
                    variant="outlined"
                    label={content.label}
                    className="w-full mb-16 mr-5"
                    size="small"
                    key={index}	
                    value={isEmpty(state[`${contentId}_date_${index}`])}	
                    name={`${contentId}_date_${index}`}	
                    onChange={handleChange}
                    multiline
                    rows={3}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />)
        };
    };

    const contents1 = [
        {
            type: "text",
            label: "Name"
        },
        {
            type: "text",
            label: "Phone"
        },
        {
            type: "text",
            label: "Mobile"
        },
        {
            type: "text",
            label: "Email"
        },
    ];
    const contents2 = [
        {
            type: "select",
            label: "Relation",
            children: [
                "Item 1",
                "Item 2"
            ]
        },
        {
            type: "textarea",
            label: "Home Address"
        }
    ];
    const contents3 = [
        {
            type: "text",
            label: "Bank"
        },
        {
            type: "text",
            label: "Bank Account"
        },        
    ];
    const amount = {
        type: "text",
        label: "Amount"
    };

    return <React.Fragment>
        <Grid container spacing={2} className="p-8" >
            <Grid item xs={12} md={6} >
                {
                    contents1 && contents1.map((content, index) => Contents(content, index, "left"))
                }
            </Grid>
            <Grid item xs={12} md={6} >
                {
                    contents2 && contents2.map((content, index) => Contents(content, index, "right"))
                }
            </Grid>
            <Grid item xs={12} >
                {
                    contents3 && contents3.map((content, index) => Contents(content, index, "3"))
                }
            </Grid>
            <Grid item xs={6}>
                {Contents(amount, 0, "amount")}
            </Grid>
        </Grid>        
    </React.Fragment>
};
export default EditContent;