import React, {} from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid,  } from "@material-ui/core";
import clsx from "clsx";
import { isEmpty } from "app/functions";

const contentsLeft = [
    {
        type: "text",
        label: "Vessel",			
    },
    {
        type: "select",
        label: "Vessel Type",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "select",
        label: "Engine Type",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },		
    {
        type: "select",
        label: "Vessel Flag",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "text",
        label: "Vessel NRT",			
    },
    {
        type: "text",
        label: "Vessel GRT",			
    },
    {
        type: "text",
        label: "Vessel DWT",			
    },
];

const contentsRight = [
    {
        type: "text",
        label: "Manager",			
    },
    {
        type: "text",
        label: "Agency",			
    },
    {
        type: "select",
        label: "Rank",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "date",
        label: "Departure Date",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },		
    {
        type: "date",
        label: "S/On Date",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "text",
        label: "S/On Place"
    },
    {
        type: "date",
        label: "S/Off Date",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "date",
        label: "Repartiation Date",
        children: [
            "Type 1", 
            "Type 2",				
        ]
    },
    {
        type: "text",
        label: "S/Off Place",			
    },
    {
        type: "select",
        label: "S/Off Reason",			
        children: [
            "Item 1",
            "Item 2"
        ]
    },
];

const EditContent = (props) => {
    const [state, setState] = React.useState({});
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
                <FormControl variant="outlined" className={clsx("w-full mr-5 mb-16")} size="small" key={index}>
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

    return (
        <React.Fragment>
            {
                state && (
                    <Grid container spacing={1}  style={{ minWidth: '50rem' }}>
                <Grid item xs={6}>
                    {
                        contentsLeft && contentsLeft.map((content, index) => Contents(content, index, "left"))
                    }						
                </Grid>
                <Grid item xs={6}>
                    {
                        contentsRight && contentsRight.map((content, index) => Contents(content, index, "rigth"))
                    }						
                </Grid>
            </Grid>
                )
            }
        </React.Fragment>)
};

export default EditContent;