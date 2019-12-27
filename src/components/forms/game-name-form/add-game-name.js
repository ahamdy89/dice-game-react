import React from 'react'
import { Formik, Form, Field} from 'formik';

const GameNameForm = ({submit}) => {
    return (
        <div>
            <Formik
            initialValues={{gameName: ''}}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setTimeout(() => {
                setSubmitting(true);
                submit(values)
                resetForm();
                setSubmitting(false);
                }, 500);
            }}
            render={({values}) => (
                <Form>
                <Field type="text" name="gameName" placeholder="Enter Game Name" value={values.gameName}/>
                <div className="form-buttons">
                    <button type="submit">Submit</button>
                </div>
                </Form>
            )}
            />
        </div>
    )
}


export default GameNameForm;