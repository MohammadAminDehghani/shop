import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from 'yup';



const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {
    return (
        <Form className="w-50" >
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
                login
            </button>
        </Form>
    )
}

interface LoginFormProps {
    email?: string,
    password?: string,
}

interface LoginFormValues {
    email?: string;
    password?: string,
}

const loginFormValidationSchema = yup.object({
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().min(8, 'min lentgh of pass is 8 char').required('Password is required'),
});


const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
    mapPropsToValues: (props) => ({
        email: props.email ?? '',
        password: props.password ?? '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: (values) => {
        console.log(values)
    }
})(InnerLoginForm)

export default LoginForm;