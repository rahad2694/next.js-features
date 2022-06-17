import { useRouter } from 'next/router';
import Navbar from '../components/NavBar';

export default function Contact() {
    const router = useRouter();
    return (
        <div>
            <Navbar />
            <div className='my-10 border-2 rounded-lg p-10 m-10'>
                <h1 className='text-center text-green-500 font-serif font-bold text-3xl mb-2'>Contact Us</h1>
                <h1 className='text-center text-xl'>Office Location</h1>
                <p className='text-center text-lg'>200 Vesey street, New York , NY 10281</p>
            </div>
            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary">Back to Home</button>
            </div>
        </div>
    )
}