import type { NextPage } from 'next';
import LoginForm from '@/app/forms/auth/loginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: NextPage = () => {
    return (
        <div className="mt-5 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='w-50 mb-4'>
                <h2>Login page!</h2>
            </div>
            <LoginForm />
        </div>
    );
};

export default Login;