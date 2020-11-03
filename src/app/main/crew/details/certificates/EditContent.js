import React,{} from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid,  } from "@material-ui/core";
import clsx from "clsx";

function isEmpty(value) {
    return value ? value : "";
}

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
                <Grid item xs={12}>
                    {
                        contentsLeft && contentsLeft.map((content, index) => Contents(content, index, "left"))
                    }						
                </Grid>
            </Grid>
                )
            }
        </React.Fragment>)
}

export default EditContent;