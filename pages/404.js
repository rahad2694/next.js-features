import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/NavBar';

export default function NotFound() {
    const router = useRouter();
    return (
        <div>

            <Navbar />

            <h1 className='text-center text-red-500 font-serif font-bold text-5xl my-10 border-2 rounded-lg p-10 m-10'>Page Not Found</h1>
            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary">Back to Home</button>
            </div>
        </div>
    )
}