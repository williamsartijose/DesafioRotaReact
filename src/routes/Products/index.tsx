import { Outlet } from 'react-router-dom';
import Card from '../../components/Card';

export default function Products() {

    return (
        <>
            <main>
                <div className="container">
                    < Card />
                </div>
            </main>
            <Outlet />
        </>
    );
}