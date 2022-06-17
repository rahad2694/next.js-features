import Link from 'next/link';

export default function Navbar() {
    return <div className="my-5 px-10 py-4 grid grid-cols-7 mx-40">
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

        <Link href="/status">
            <a><h1 className='text-lg m-2 font-semibold border-2 px-3 py-1 rounded-lg hover:text-red-500 text-center'>All Status</h1></a>
        </Link>

    </div>
}