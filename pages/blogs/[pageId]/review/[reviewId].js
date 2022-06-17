import { useRouter } from 'next/router';
import Navbar from '../../../../components/NavBar';

export default function Review() {
    const router = useRouter();
    const { pageId, reviewId } = router.query;
    console.log(pageId, reviewId);
    return (
        <div>
            <Navbar />
            <h1 className='text-center text-green-500 font-serif font-bold text-xl my-10 border-2 rounded-lg p-10 m-10'>welcome to the <span className='text-red-500 text-3xl'>{reviewId}</span> th review of the page number: <span className='text-red-500 text-3xl'>{pageId}</span></h1>
            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary">Back to Home</button>
            </div>
        </div>
    )
}