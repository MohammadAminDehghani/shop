import { useState } from 'react';
import type { NextPage } from 'next';
import { Field, Form, Formik, useFormik } from 'formik';


import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from '@/app/forms/auth/registerForm';

interface RegisterFormValues {
    name: String,
    email: String,
    password: String
}

const Register: NextPage = () => {
    const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);



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
                <RegisterForm
                />
            </Formik>

        </div>
    );
};

export default Register;