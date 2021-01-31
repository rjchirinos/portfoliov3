import React from 'react';
import { Formik, Form, Field } from "formik";
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from '../Button/Button';

const ContactForm = () => {
    return (
        <div>
            <Formik
                // onSubmit={values => console.log(values)}
                initialValues={{
                    name: "",
                    email: "",
                    message: ""
                }}
                onSubmit={values => console.log(values)}
            >
                {({ values, setFieldValue }) => (
                    <Form autoComplete="off">
                        <Field name="name">
                            {({ field }) => (
                                <>
                                    <TextInput
                                        name={field.name}
                                        placeholder="Name"
                                        value={field.value}
                                        onChange={(value) => {
                                            setFieldValue(field.name, value);
                                        }}
                                    />
                                </>
                            )}
                        </Field>
                        <Field name="email">
                            {({ field }) => (
                                <>
                                    <TextInput
                                        name={field.name}
                                        placeholder="Email Adress"
                                        value={field.value}
                                        onChange={(value) => {
                                            setFieldValue(field.name, value);
                                        }}
                                    />
                                </>
                            )}
                        </Field>

                        <Field name="message">
                            {({ field }) => (
                                <>
                                    <TextArea
                                        name={field.name}
                                        placeholder="Message"
                                        value={field.value}
                                        onChange={(value) => {
                                            setFieldValue(field.name, value);
                                        }}
                                    />
                                </>
                            )}
                        </Field>
                        <Button type="submit" onClick={() => { }}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;