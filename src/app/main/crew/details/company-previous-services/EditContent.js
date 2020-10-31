import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { TextField, Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 300
    }
}));

function isEmpty(value) {
    return value ? value : "";
}
const minItemWidth = 20;

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
        };
    };

    const contents1 = [
        {
            type: "select",
            label: "Vessel",
            children: [
                "item 1",
                "item 1",
            ]
        },
        {
            type: "select",
            label: "Agency",
            children: [
                "item 1",
                "item 1",
            ]
        },
        {
            type: "select",
            label: "Rank",
            children: [
                "item 1",
                "item 1",
            ]
        },
        {
            type: "date",
            label: "Departure Date"
        },
        {
            type: "date",
            label: "S/On Date"
        },
        {
            type: "text",
            label: "S/On Place"
        },
        {
            type: "select",
            label: "OFB",
            children: [
                "item 1",
                "item 1",
            ]
        },
    ];
    const contents2 = [
        {
            type: "date",
            label: "S/Off Date"
        },
        {
            type: "date",
            label: "Repatriation Date"
        },
        {
            type: "text",
            label: "S/Off Place"
        },
        {
            type: "select",
            label: "S/Off Reason",
            children: [
                "item 1",
                "item 2"
            ]
        },
    ];
    return <React.Fragment>
        <Grid container spacing={2} className="p-8">
            <Grid item xs={12} md={5} style={{ minWidth: `${minItemWidth}rem` }}>
                {
                    contents1 && contents1.map((content, index) => Contents(content, index, "left"))
                }
            </Grid>
            <Grid item xs={12} md={6} style={{ minWidth: `${minItemWidth + 10}rem` }}>
                <Grid container >
                    <Grid item xs={8}>
                        <TextField 
                            variant="outlined"
                            label="Total Wage"
                            className="w-full mb-16 mr-4"
                            size="small"
                            value={isEmpty(state[`right_text_total_wage`])}	
                            name={`right_text_total_wage`}	
                            onChange={handleChange}
                            inputProps={{
                                style: {
                                    textAlign: "right"
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} className="pl-4">
                        <FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-16")} size="small">
                            <InputLabel id={`select-label-total-wage`}></InputLabel>
                            <Select
                                labelId={`select-label-total-wage`}
                                value={isEmpty(state[`right_select_total_wage`])}
                                onChange={handleChange}
                                label=""
                                name={`right_select_total_wage`}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>item 1</MenuItem>
                                <MenuItem value={2}>item 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} className="mb-32">
                    {
                        contents2 && contents2.map((content, index) => Contents(content, index, "right"))
                    }
                    </Grid>
                    <Grid item xs={8}> 
                        <TextField 
                            variant="outlined"
                            label="Contract Expiry"
                            className="w-full mb-16 mr-5"
                            size="small"
                            value={isEmpty(state[`right_date_contract_expiry`])}	
                            name={`right_date_contract_expiry`}	
                            onChange={handleChange}
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}> 
                        <FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-16")} size="small">
                            <InputLabel id={`select-label-ext-contract`}>Ext.Contract</InputLabel>
                            <Select
                                labelId={`select-label-ext-contract`}
                                value={isEmpty(state[`right_select_ext_contract`])}
                                onChange={handleChange}
                                label="Ext.Contract"
                                name={`right_select_ext_contract`}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>item 1</MenuItem>
                                <MenuItem value={2}>item 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} md={6} style={{ minWidth: `${minItemWidth}rem` }}>
                <div className="w-full border border-gray-300">
                    <div className="w-full h-136 border border-gray-300">
                        <InputLabel className="w-full text-center p-2 border border-gray-300">Wage</InputLabel>
                        <div className="flex w-full">
                            <InputLabel className="w-full p-2 border border-gray-300">Type</InputLabel>
                            <InputLabel className="w-full text-right p-2 border border-gray-300">Amount</InputLabel>
                        </div>
                        <div className="flex w-full">
                            <InputLabel className="w-full p-2 border border-gray-300">Basic Wage</InputLabel>
                            <InputLabel className="w-full text-right p-2 border border-gray-300">0.00</InputLabel>
                        </div>
                        <div className="flex w-full">
                            <InputLabel className="w-full p-2 border border-gray-300">Overtime</InputLabel>
                            <InputLabel className="w-full text-right p-2 border border-gray-300">0.00</InputLabel>
                        </div>
                        <div className="flex w-full">
                            <InputLabel className="w-full p-2 border border-gray-300">Owner Bonus</InputLabel>
                            <InputLabel className="w-full text-right p-2 border border-gray-300">0.00</InputLabel>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-full"></div>
                        <InputLabel className="w-full text-right p-2 border border-gray-300">0.00</InputLabel>
                    </div>
                </div>
            </Grid>
        </Grid>        
    </React.Fragment>
};
export default EditContent;