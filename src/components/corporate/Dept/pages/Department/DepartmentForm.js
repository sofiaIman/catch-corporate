import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "components/corporate/Dept/controls/Controls";
import { useForm, Form } from 'components/corporate/Dept/useForm';





const initialFValues = {
    id: 0,
    deptName: '',
    NoofEmployees: '',
    deptAdmin: '',
    vehicleType: '',
    
   
}

export default function DepartmentForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('deptName' in fieldValues)
            temp.deptName = fieldValues.deptName ? "" : "This field is required."
        if ('NoofEmployees' in fieldValues)
            temp.NoofEmployees = fieldValues.NoofEmployees ? "" : "This field is required."
        if ('deptAdmin' in fieldValues)
            temp.deptAdmin = fieldValues.deptAdmin ? "" : "This field is required."
       
        setErrors({
            ...temp
        })

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
                        name="deptName"
                        label="Department Name"
                        value={values.deptName}
                        onChange={handleInputChange}
                        error={errors.deptName}
                    />
                    <Controls.Input
                        label="Employee No"
                        name="NoofEmployee"
                        value={values.NoofEmployee}
                        onChange={handleInputChange}
                        error={errors.NoofEmployee}
                    />
                    <Controls.Input
                        label="Department Admin"
                        name="deptAdmin"
                        value={values.deptAdmin}
                        onChange={handleInputChange}
                        error={errors.deptAdmin}
                    />
                    <Controls.Input
                        label="Vehicle Type"
                        name="vehicleType"
                        value={values.vehicleType}
                        onChange={handleInputChange}
                    />

            
                
                   
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
            </Grid>
        </Form>
    )
}
