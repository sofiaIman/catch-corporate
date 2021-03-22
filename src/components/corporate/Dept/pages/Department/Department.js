import React, { useState } from 'react'
import DepartmentForm from "./DepartmentForm";
import PageHeader from "components/corporate/Dept/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "components/corporate/Dept/useTable";
import * as departmentService from "components/corporate/Dept/services/departmentService";
import Controls from "components/corporate/Dept/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "components/corporate/Dept/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'deptName', label: 'Department Name' },
    { id: 'Noofemployee', label: 'Employee No' },
    { id: 'deptAdmin', label: 'Department Admin' },
    { id: 'vehicleType', label: 'Vehicle Type' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Department() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(departmentService.getAllDepartment())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (department, resetForm) => {
        if (department.id == 0)
        departmentService.insertDepartment(department)
        else
        departmentService.updateDepartment(department)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(departmentService.getAllDepartment())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
            
            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Controls.Input
                        label="Search Department"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.deptName}</TableCell>
                                    <TableCell>{item.Noofemployee}</TableCell>
                                    <TableCell>{item.deptAdmin}</TableCell>
                                    <TableCell>{item.vehicleType}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary">
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="Department Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <DepartmentForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}
