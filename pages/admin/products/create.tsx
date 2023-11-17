import AdminPanelLayout from "../../../app/components/adminPanelLayout";
import { NextPageWithLayout } from "../../_app";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Input from "../../../app/components/shared/form/input";

const ProductCreate: NextPageWithLayout = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              create products
            </h1>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <Formik
                  initialValues={{}}
                  validationSchema={Yup.object().shape({})}
                  onSubmit={() => {}}
                >
                  {({ values, isSubmitting, setFieldValue }) => (
                    <Form>
                      <div className="p-6 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
                        <div className="sm:col-span-2">
                          <Input
                            name="label"
                            type="text"
                            label="product name"
                            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <Input
                            name="label"
                            type="text"
                            label="product's price"
                            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-4">
                          <Input
                            name="label"
                            type="text"
                            label="about product"
                            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="p-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center">
                        <button
                          type="submit"
                          className="ml-2 inline-flex items-center mx-1 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-700 "
                        >
                          Create a new
                        </button>
                        <button
                          onClick={() => {}}
                          type="button"
                          className="inline-flex items-center mx-1 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Cancel</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCreate.getLayout = (page) => (
  <AdminPanelLayout pageName="products.create">{page}</AdminPanelLayout>
);

export default ProductCreate;
