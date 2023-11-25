import { Metadata, ResolvingMetadata } from "next";
import { toast } from "react-toastify";


interface Props {
    params: {
        id: string;
    }
}

const getProduct = async (id: string) => {
    let res = await fetch(`http://localhost:5000/api/products/${id}`,{});
    console.log(res);
    if( ! res.ok){
        //toast.error('Something went wrong. Please try again')
        //console.log('Something went wrong. Please try again');
        throw new Error('Something went wrong. Please try again');
    }

    return res.json();
}

export async function generateMetadata({params} : Props , parent : ResolvingMetadata) : Promise<Metadata> {
    
    let productData = await getProduct(params.id);
    let product = productData.product;
    
    return {
        title: product.title,
        description: product.body.substr(0,120),
    }
}


export default async function ShowProduct({params : {id}} : Props) {

    let productData = await getProduct(id);
    let product = productData.product;
    return(
        <h2>product { product.title }</h2>
    )
}