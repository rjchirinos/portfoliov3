import React from 'react';
import { Formik, Form, Field } from "formik";
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from '../Button/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as Yup from "yup";

const MySwal = withReactContent(Swal)

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required()
})

const ContactForm = () => {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    return (
        <div>
            <Formik
                // onSubmit={values => console.log(values)}
                initialValues={{
                    name: "",
                    email: "",
                    message: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: encode({ "form-name": "contact-form", ...values })
                    })
                        .then(() => {
                            MySwal.fire({
                                title: "Success!",
                                icon: "success",
                                text: "Your message was submitted successfuly",
                                confirmButtonColor: "#68349B"
                            })
                            actions.resetForm()
                        })
                        .catch(() => {
                            MySwal.fire({
                                title: "Oops!",
                                icon: "error",
                                text: "Something went wrong, try again later.",
                                confirmButtonColor: "#68349B"
                            })
                            alert('Error');
                        })
                        .finally(() => actions.setSubmitting(false))
                }}
            >
                {({ errors, setFieldValue }) => (
                    <Form autoComplete="off" name="contact-form" data-netlify={true}>
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
                                        error={errors.name}
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
                                        error={errors.email}
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
                                        error={errors.message}
                                    />
                                </>
                            )}
                        </Field>
                        <Button type="submit" onClick={() => { console.log({ errors }) }}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;