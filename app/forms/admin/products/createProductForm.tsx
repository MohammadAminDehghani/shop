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
    category: yup.number().integer(),
    description: yup.string().min(4).max(6000),
});

interface LoginFormProps {
    // title?: string,
    // price?: number,
    // category?: number,
    // description?: string,
}

const CreateProductForm = withFormik<LoginFormProps, CreateProductInterface>({
    mapPropsToValues: (props) => ({
        title: '',
        price: 0,
        category: '',
        description: '',
    }),
    validationSchema: FormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
       
        try {

            const res = await callApi().post('/products/create', {
                ...values,
                body: values.description
            });
            if (res.status === 200) {
                Router.push('/admin/products')
            }

        } catch (error) {
            if (error instanceof validationErrors) {
                Object.entries(error.messages).forEach(
                    ([key, value]) => setFieldError(key, value as string)
                )
                return;
            }
            console.log(error)
        }

    }
})(InnerCreateProductForm)

export default CreateProductForm;