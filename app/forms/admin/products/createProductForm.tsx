"use client";

import InnerCreateProductForm from "@/app/components/admin/products/innerCreateProductForm";
import { CreateProductInterface } from "@/app/contracts/admin/products";
import validationErrors from "@/app/exceptions/validationErrors";
import { withFormik } from "formik";
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

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
        category: 0,
        description: '',
    }),
    validationSchema: FormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        const router = useRouter();
       console.log(values)
        try {
            console.log(values)
            router.push('/admin/products')
            //const res = await CreateProduct(values)
            //router.push('/admin/products')
            // if (res.status === 200) {
            //     Router.push('/admin/products')
            // }
            //toast.success("the product created successfully");
            //GetProducts;

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