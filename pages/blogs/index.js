import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../../components/NavBar';

export default function Blogs() {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        const pageNo = e.target.page.value;
        const reviewNo = e.target.review.value;
        console.log(pageNo, reviewNo);
        if (pageNo && reviewNo) {
            router.push(`/blogs/${pageNo}/review/${reviewNo}`);
        }
        else {
            toast.error('Please enter Data!', { id: 'no-data-error' })
        }
    }
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl text-center font-serif my-5">Welcome to the blog section</h1>
            <div className="border-2 cursor-pointer rounded-lg p-20 m-20 text-green-500 hover:text-red-500">
                <p className=" text-center text-lg">Here comes the blog area</p>
            </div>
            <div className="divider">OR</div>
            <div className="border-2 cursor-pointer rounded-lg p-20 m-20 text-green-500 hover:text-red-500">
                <p className=" text-center text-lg">Want to see some reviews?</p>
                <form onSubmit={handleSubmit} className="flex justify-center align-middle my-3">
                    <input name='page' type="text" placeholder="Page Number" className="m-2 input input-bordered input-secondary w-full max-w-xs" />
                    <input name='review' type="text" placeholder="Review Number" className="m-2 input input-bordered input-secondary w-full max-w-xs" />
                    <br />
                    <input className="btn btn-active btn-primary mx-4 mt-2 px-10 py-2" type="submit" value="Go" />
                </form>
            </div>
            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary mb-10">Back to Home</button>
            </div>
            <Toaster />
        </div>
    )
}