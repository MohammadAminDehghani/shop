import type { NextPage } from 'next';

import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from '@/app/forms/auth/registerForm';

const Register: NextPage = () => {
    return (
        <div className="mt-5 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='w-50 mb-4'>
                <h2>Register page!</h2>
            </div>
            <RegisterForm />
        </div>
    );
};

export default Register;