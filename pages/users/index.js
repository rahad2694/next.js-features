import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Users({ users }) {
    const router = useRouter();
    console.log(users);
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

            <h1 className='text-center text-blue-500 font-serif font-bold text-5xl my-10 border-2 rounded-lg p-10 m-10'>Welcome to Users List</h1>
            <div className='text-center font-serif font-bold  my-10 border-2 rounded-lg p-10 m-10'>
                <h1 className='text-2xl'>Customer Info:</h1>
                {
                    users?.map((user, index) => <ul key={user.id}>
                        <li className='text-green-500 my-2 border rounded-lg py-1'>{index + 1} : Name:{user.name} Email:{user.email}</li>
                    </ul>)
                }
            </div>
            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary">Back to Home</button>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    // console.log(data);
    return {
        props: {
            users: data
        }
    }
}