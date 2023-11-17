import InnerCreateProductForm from "@/app/components/admin/products/innerCreateProductForm";
import { CreateProductInterface } from "@/app/contracts/admin/products";
import validationErrors from "@/app/exceptions/validationErrors";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import Router from "next/router";
import * as yup from 'yup';

const FormValidationSchema = yup.object({
    title: yup.string().min(4).max(255).required('Name is required'),
    price: yup.string().min(0),
    description: yup.string().min(4).max(6000),
});

interface LoginFormProps {
    title?: string,
    price?: number,
    description?: string,
}

const CreateProductForm = withFormik<LoginFormProps, CreateProductInterface>({
    mapPropsToValues: (props) => ({
        title: props.title ?? '',
        price: props.price ?? 0,
        description: props.description ?? '',
    }),
    validationSchema: FormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        console.log(values);
        try {

            const res = await callApi().post('/auth/login', values);
            if (res.status === 200) {

            }

        } catch (error) {
            if (error instanceof validationErrors) {
                Object.entries(error.messages).forEach(
                    ([key, value]) => setFieldError(key, value as string)
                )
            }
        }

    }
})(InnerCreateProductForm)

export default CreateProductForm;