import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { TextField, Select, InputLabel, MenuItem, FormControl, TableContainer, Paper } from "@material-ui/core";
import clsx from "clsx";
import { DataGrid } from "@material-ui/data-grid";
import { isEmpty } from "app/functions";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 300
    }
}));

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
        label: "Type",
        children: [
            "item 1",
            "item 1",
        ]
    },
    {
        type: "text",
        label: "Assessor Name"
    },
    {
        type: "date",
        label: "Assessment Date"
    },
    {
        type: "select",
        label: "Employment Status",
        children: [
            "item 1",
            "item 1",
        ]
    },
    {
        type: "text",
        label: "Bad Habits"
    },
    {
        type: "text",
        label: "To be Promoted"
    },
    {
        type: "text",
        label: "Reason for dismissal"
    },
    {
        type: "textarea",
        label: "Notes"
    },
];

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

    return <React.Fragment>
        <Grid container spacing={2} className="p-8" >
            <Grid item xs={12} md={5} >
                {
                    contents1 && contents1.map((content, index) => Contents(content, index, "left"))
                }
                <TextField 
                    variant="outlined"
                    label="File Upload"
                    className="w-full mb-16 mr-5"
                    size="small"
                    type="file"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </Grid>
            
            <Grid item xs={12} md={7}>
                <Grid container className="w-full h-320 mb-16">
                    <Grid item xs={12} className="w-full h-full">
                        <TableContainer component={Paper} className="w-full h-full">
                            <DataGrid 
                                rows={[
                                    {
                                        id: 0,
                                        category: "test",
                                        score: "test"
                                    }
                                ]}
                                columns={[
                                    {
                                        field: "category",
                                        headerName: "Category",
                                        width: 200

                                    },
                                    {
                                        field: "score",
                                        headerName: "Score",
                                        width: 130
                                    }
                                ]}		
                                rowHeight={25}	
                                hideFooter={true}
                                
                            />
                        </TableContainer>  
                    </Grid>
                </Grid>
                <Grid container className="flex justify-end">
                    <Grid item xs={4}>
                        <TextField 
                            label="OVERALL RATING"
                            variant="outlined"      
                            size="small"                      
                        />
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>        
    </React.Fragment>
};
export default EditContent;