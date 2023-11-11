import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";



const  useAuth = () => {

    const Cookie = new Cookies();

    const { data, error } =  useSWR('user_me', ()=>{

        return callApi().get('/user',{
            headers : {
                authorization : Cookie.get('auth_token')
            }
        })
    })

    return { user : data?.data?.user, error, loading: !data && !error}
}


export default useAuth;