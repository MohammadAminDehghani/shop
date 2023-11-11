import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "../../app/components/userPanelLayout";
import { useEffect, useState } from "react";
import { object, string } from "yup";
import axios from "axios";
import callApi from "@/app/helpers/callApi";
import useAuth from "@/app/hooks/useAuth";
import UserInfo from "@/app/components/panel/userInfo";


const Panel : NextPageWithLayout = () => {

    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        setInterval(()=>{
            setLoading(false)
        }, 3000)
    }, [])

    if (loading) return <div>Loading...</div>

    return(
        <>
            <div>
                <UserInfo />
            </div>
        </>
    )
}


// async function getStaticPaths() {
//     // fetch list of available slugs from a database
//     const user = await useAuth();
//     //const posts = await res.json()
//     //const slugs = posts.map((post:any) => post.slug)
//     console.log(user)
  
//     // return the possible values for the [slug] parameter
//     return {
//     //   paths: slugs.map((slug:any) => ({ params: { slug } })),
//     //   fallback: false
//     }
//   }


Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;