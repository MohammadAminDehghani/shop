import Input from "@/app/components/shared/form/input";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import callApi from "@/app/helpers/callApi";
import { Form, FormikProps, withFormik } from "formik";
import Router from "next/router";
import * as yup from 'yup';



const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form className="w-50" >
            <div className="mb-4">
                <Input
                    label="Your Name"
                    name="name"
                    inputClassName="form-control"
                />
            </div>

            <div className="mb-4">
                <Input
                    label="Email Address"
                    name="email"
                    inputClassName="form-control"
                />
            </div>

            <div className="mb-4">
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    inputClassName="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                submit
            </button>
        </Form>
    )
}

const registerFormValidationSchema = yup.object({
    name: yup.string().trim().required('Name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().min(8, 'min lentgh of pass is 8 char').required('Password is required'),
});

interface RegisterFormProps {
    name?: string,
    email?: string,
    password?: string,
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({

    mapPropsToValues: (props) => ({
        name: props.name ?? '',
        email: props.email ?? '',
        password: props.password ?? '',
    }),

    validationSchema: registerFormValidationSchema,

    handleSubmit: async (values) => {

        const res = await callApi().post('/auth/register', values);

        if (res.status === 201) {
            Router.push('/auth/login');
        }
        
    }
})(InnerRegisterForm)

export default RegisterForm;