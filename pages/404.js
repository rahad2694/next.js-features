import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
    const router = useRouter();
    return (
        <div>

            <div className="my-5 px-10 py-4 grid grid-cols-6 mx-40">
                <Link href="/">
                    <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>Home</h1></a>
                </Link>

                <Link href="/contact">
                    <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>Contact</h1></a>
                </Link>

                <Link href="/blogs">
                    <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>Blogs</h1></a>
                </Link>

                <Link href="/docs/item-1/item-2">
                    <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>Catch All</h1></a>
                </Link>

                <Link href="/users">
                    <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>Users</h1></a>
                </Link>

                <Link href="/posts">
                    <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>All Posts</h1></a>
                </Link>

            </div>

            <h1 className='text-center text-red-500 font-serif font-bold text-5xl my-10 border-2 rounded-lg p-10 m-10'>Page Not Found</h1>
            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary">Back to Home</button>
            </div>
        </div>
    )
}