import { ReactNode } from 'react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';

interface Props {
    children: ReactNode
}


const AdminPanelLayout = ({ children }: Props) => {

    const router = useRouter()
    const { user, error, loading } = useAuth();

    if (loading) { return <h1>Loading...</h1> }

    if (error) {
        //show error message
        router.push('/auth/login')
        return <></>;
    }

    if (!user?.is_admin) {
        //redirect user to admin page
        router.push('/')
        return <></>;
    }

    return (
        <div className="container">
            {children}
        </div>
    )
}


export default AdminPanelLayout;