import Cookies from "universal-cookie";


const storeLoginToken = async (token: string) => {

    await fetch('/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token })
    })



    // const cookies = new Cookies();

    // cookies.set('auth_token', token, {
    //     path: '/',
    //     maxAge: 60 * 60 * 24 * 2
    // });
}


const removeLoginToken = () => {

}


export { storeLoginToken, removeLoginToken };