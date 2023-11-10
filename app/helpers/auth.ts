import Cookies from "universal-cookie";


const storeLoginToken = (token : string) => {
    const cookies = new Cookies();

    cookies.set('auth_token', token, {
        path : '/',
        maxAge : 60 * 60 * 24 * 2
    });
}


const removeLoginToken = () => {

}


export { storeLoginToken, removeLoginToken };