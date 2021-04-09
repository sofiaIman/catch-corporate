import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "components/corporate/Deps/controls/Controls";
import { useForm, Form } from 'components/corporate/Deps/useForm';
import * as employeeService from 'components/corporate/Deps/services/employeeService';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    depName: '',
    empNo: '',
    admin: '',
    vType: '',
    
    
}

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('depName' in fieldValues)
            temp.depName = fieldValues.depName ? "" : "This field is required."
     
        if ('empNo' in fieldValues)
            temp.empNo = fieldValues.empNo ? "" : "This field is required."

        if ('admin' in fieldValues)
            temp.admin = fieldValues.admin ? "" : "This field is required."
       
        if ('vType' in fieldValues)
            temp.vType = fieldValues.vType ? "" : "This field is required."
        
        

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="depName"
                        label="Department Name"
                        value={values.depName}
                        onChange={handleInputChange}
                        error={errors.depName}
                    />
                    <Controls.Input
                        label="Employee Number"
                        name="empNo"
                        value={values.empNo}
                        onChange={handleInputChange}
                        error={errors.empNo}
                    />
                    <Controls.Input
                        label="Department Admin"
                        name="admin"
                        value={values.admin}
                        onChange={handleInputChange}
                        error={errors.admin}
                    />
                    <Controls.Input
                        label="vehicle type"
                        name="vType"
                        value={values.vType}
                        onChange={handleInputChange}
                    />

                </Grid>

                

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
        
        </Form>
    )
}
