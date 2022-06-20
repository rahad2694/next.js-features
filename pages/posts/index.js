import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/NavBar';

export default function Posts({ posts }) {
    const router = useRouter();
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center text-green-500 font-serif font-bold text-2xl my-10 border-2 rounded-lg p-10 m-10'>All Posts Using getStaticProps + ISR(10 sec):</h1>

            <div className='text-center font-serif font-bold  my-10 border-2 rounded-lg p-10 m-10'>
                {/* <h1 className='text-2xl'>Customer Info:</h1> */}
                {
                    posts?.map((post, index) => <ul key={post.id}>
                        <li className='text-green-500 my-2 border rounded-lg py-1 cursor-pointer hover:text-red-500'>
                            <Link href={`posts/${post.id}`}>
                                <a>{index + 1} : {post.title}</a>
                            </Link>
                        </li>
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
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: {
            posts: data
        },
        revalidate: 10
    }
}