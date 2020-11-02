import React,{ } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650
    },
    tablerow: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}));

const hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
]

const CTableRow = (props) => {
    const {row} = props;
    const temp_loop = [1, 2, 3]
    const classes = useStyles();
    return <React.Fragment>
        <TableRow hover className={classes.tablerow}>
            <TableCell className="border border-gray-200 p-4" align="center" rowSpan={4}>        
            </TableCell> 
            <TableCell className="border border-gray-200 p-4" align="center" rowSpan={4}> 
                {row.name}     
            </TableCell>
            <TableCell className="border border-gray-200 p-4" align="center" rowSpan={4}> 
                {row.rank}       
            </TableCell>     
            {
                row.data[0].map((item, index) => 
                <TableCell className={`border border-gray-200 p-4 ${index < 2 ? "font-bold" : ""}`} align="center" key={index} style={{color: `${index == 1 ? "blue" : ""}`}}>  
                    {item}
                </TableCell>)
            } 
        </TableRow>
        {
            temp_loop.map((item, index) => 
            <TableRow hover className={classes.tablerow} key={index}>  
            {
                row.data[item].map((item, index) => 
                <TableCell className={`border border-gray-200 p-4 ${index < 2 ? "font-bold" : ""}`} align="center" key={index} style={{color: `${index == 1 ? "blue" : ""}`}}>  
                    {item}
                </TableCell>)
            }         
            </TableRow>)
        }

    </React.Fragment>
    
};

const TableSchedule = (props) => {
    const classes = useStyles();
    const { rows, columns } = props;

    return <React.Fragment>
        <Table className={classes.table} size="small" aria-label="Retention Rate Table">
            <TableHead>
                <TableRow>
                    <TableCell className="border border-gray-200 p-4" align="center">*
                    </TableCell>
                    <TableCell className="border border-gray-200 p-4" colSpan={4} align="center">Hours
                    </TableCell>
                    {
                        hours && hours.map((hour, index) => 
                        <TableCell className="border border-gray-200 p-4" colSpan={2} align="center" key={index}>
                            {hour}
                        </TableCell>)
                    }
                </TableRow>
                <TableRow>
                    {
                        columns && columns.map((col, index) => 
                        <TableCell key={index} className="border border-gray-200 p-4" align="center" style={{ minWidth: `${col.width}px` }}>
                            {col.headerName}
                        </TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows && rows.map((row, index) =>
                    // <TableRow key={index} hover className={classes.tablerow}>
                    //     {
                    //         columns && columns.map((col, col_index) => {
                    //             if(col_index > 4 && col_index <= 52) {
                    //                 return <TableCell key={col_index} align="center" className={`border border-gray-200 p-4 ${row.data[col_index -5].value == "W" ? "font-bold" : ""} ${row.data[col_index - 5].color}`}>
                    //                 {row.data[col_index - 5].value}
                    //             </TableCell>
                    //             } else {
                    //                 return <TableCell rowSpan={4} key={col_index} align={col.align} className="border border-gray-200 p-4">
                    //                     {row[`${col.field}`]}
                    //                 </TableCell>
                    //             }
                    //         })
                    //     }       
                    // </TableRow>
                    <CTableRow row={row} key={index} />
                    )
                }
            </TableBody>
        </Table>        
    </React.Fragment>
};

export default TableSchedule;