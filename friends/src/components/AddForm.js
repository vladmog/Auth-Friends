import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {connect} from 'react-redux';
import {addFriend} from '../actions/actions'

function AddForm({touched, errors}) {
    return(
        <div>
            <Form>
                <Field 
                    name = "name"
                    type = "text"
                    placeholder = "name"
                />
                <p>{touched.name && errors.name}</p>
                <Field 
                    name = "email"
                    type = "text"
                    placeholder = "email"
                />
                <p>{touched.email && errors.email}</p>
                <Field 
                    name = "age"
                    type = "number"
                    placeholder = "age"
                />
                <p>{touched.age && errors.age}</p>
                <button>Submit</button>
            </Form>

        </div>
    )
}

const FormikAddForm = withFormik({
    mapPropsToValues({name, age, email}){
        return{
            name: name || "",
            age: age || "",
            email: email || "",
            //these end up as "values"
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(1)
            .required(),
        email: Yup.string()
            .email()
            .required(),
        age: Yup.number()
            .required(),
    }),

    handleSubmit(values, formikBag, props) {
        formikBag.resetForm();
        formikBag.setSubmitting(true);
        // axiosWithAuth().post('/friends', values)
        //     .then(res => {
        //         console.log(res)
        //         window.alert(`Welcome`);
        //         formikBag.setSubmitting(false);   
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         window.alert(`Error`);
        //         formikBag.setSubmitting(false); 
        //     })
        console.log("propscheck:", props)
        this.props.addFriend(values)
            .then(res => {
                console.log(res)
                window.alert(`Welcome`);
                formikBag.setSubmitting(false);   
            })
            .catch(err => {
                console.log(err)
                window.alert(`Error`);
                formikBag.setSubmitting(false); 
            })
    }
})(AddForm)

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps, {addFriend})(FormikAddForm);