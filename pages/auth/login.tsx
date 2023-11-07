// next
import type { NextPage } from 'next';

//pakages
import { useCookies } from 'react-cookie';

// my imports
import LoginForm from '@/app/forms/auth/loginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: NextPage = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['login-token']);

    return (
        <div className="mt-5 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='w-50 mb-4'>
                <h2>Login page!</h2>
            </div>
            <LoginForm setCookie={setCookie} />
        </div>
    );
};

export default Login;