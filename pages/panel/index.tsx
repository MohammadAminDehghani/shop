import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "../../app/components/userPanelLayout";
import { useEffect, useState } from "react";


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
                this is panel
            </div>
        </>
    )
}


Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;