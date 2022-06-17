import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/NavBar';

export default function Users({ users }) {
    const router = useRouter();
    console.log(users);
    return (
        <div>

            <Navbar></Navbar>

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