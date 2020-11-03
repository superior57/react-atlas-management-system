import React,{ } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    table: {
        // minWidth: 650
    },
    tablerow: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}));


const TableVesselOperation = (props) => {
    const classes = useStyles();
    const { rows, columns } = props;

    return <React.Fragment>
        <Table className={classes.table} size="small" aria-label="Retention Rate Table">
            <TableHead>
                <TableRow>
                    {
                        columns && columns.map((col, index) => 
                        <TableCell key={index} className="border border-gray-200" width={col.width} align="center">
                            {col.headerName}
                        </TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows && rows.map((row, index) =>
                    <TableRow key={index} hover className={classes.tablerow}>
                        {
                            columns && columns.map((col, col_index) =>{
                                if(col.field == "color") 
                                    return <TableCell key={col_index} align={col.align} className="border border-gray-200" style={{backgroundColor: `${row[`${col.field}`]}`}}>
                                    </TableCell>
                                else
                                    return <TableCell key={col_index} align={col.align} className="border border-gray-200">
                                        {row[`${col.field}`]}
                                    </TableCell>
                            })
                        }                        
                    </TableRow>)
                }
            </TableBody>
        </Table>        
    </React.Fragment>
};

export default TableVesselOperation;