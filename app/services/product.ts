import callApi from "../helpers/callApi";



export async function getProducts({page = 1, per_page = 10}){

    let res = await callApi().get(`/products?page=${page}&per_page=${per_page}`);

    return res?.data?.data;

}