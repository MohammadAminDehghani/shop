import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from 'yup';

interface RegisterFormValues {
    label?: string;
    id?: string;
    name: string;
    type?: string;
    placeholder?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
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

interface RegisterFormProps {
    name?: string,
    email?: string,
    password?: string,
}


const registerFormValidationSchema = yup.object({
    name: yup.string().trim().required('Name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().min(8, 'min lentgh of pass is 8 char').required('Password is required'),
});


const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
    mapPropsToValues: (props) => ({
        name: props.name ?? '',
        email: props.email ?? '',
        password: props.password ?? '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: (values) => {
        console.log(values)
    }
})(InnerRegisterForm)

export default RegisterForm;