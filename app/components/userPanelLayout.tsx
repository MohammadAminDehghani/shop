import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}


const UserPanelLayout = ({ children }: Props) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}


export default UserPanelLayout;