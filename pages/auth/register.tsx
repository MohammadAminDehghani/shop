import { useState } from 'react';
import type { NextPage } from 'next';
import { Field, Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

interface RegisterFormValues {
    name: String,
    email: String,
    password: String
}

const Register: NextPage = () => {
    const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
        },
        onSubmit: () => {
            setMessage('Form submitted');
            setSubmitted(true);
        },
        validationSchema: yup.object({
            name: yup.string().trim().required('Name is required'),
            email: yup
                .string()
                .email('Must be a valid email')
                .required('Email is required'),
            password: yup.string().min(8, 'min lentgh of pass is 8 char').required('Password is required'),
        }),
    });

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div hidden={!submitted} className="alert alert-primary" role="alert">
                {message}
            </div>
            <div className='w-50 mb-4'>
                <h2>Register page!</h2>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="w-50" onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="John Doe"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && (
                            <div className="text-danger">{formik.errors.name}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="john@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && (
                            <div className="text-danger">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Password
                        </label>
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="type your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && (
                            <div className="text-danger">{formik.errors.password}</div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary">
                        submit
                    </button>
                </Form>
            </Formik>

        </div>
    );
};

export default Register;