import callApi from "../helpers/callApi";
import { CreateProductInterface } from "@/app/contracts/admin/products";

export async function GetProducts({ page = 1, per_page = 10 }) {
  let res = await callApi().get(`/products?page=${page}&per_page=${per_page}`);

  return { products: res?.data?.data, total_page: res?.data?.total_page };
}

export async function CreateProduct(values: CreateProductInterface) {
  return await callApi().post("/products/create", {
    ...values,
    body: values.description,
  });
}

export async function DeleteProduct(productId: number) {
  return await callApi().post(`/products/${productId}/delete`, {});
}
