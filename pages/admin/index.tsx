import { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";
import AdminPanelLayout from "@/app/components/adminPanelLayout";

const Admin : NextPageWithLayout = () => {

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
                Admin panel
            </div>
        </>
    )
}


Admin.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default Admin;