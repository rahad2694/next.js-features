import { useRouter } from 'next/router';
import Navbar from '../../components/NavBar';

export default function Post({ post }) {
    const router = useRouter();
    const { postId } = router.query;
    return (
        <div>
            <Navbar />
            <h1 className='text-center text-green-500 font-serif font-bold text-2xl my-10 border-2 rounded-lg p-10 m-10'>Post Details: <br />
                <span className='text-center text-red-500 font-serif font-bold text-sm my-3'>(Used getStaticProps and getStaticPaths)</span>
            </h1>

            <div className='text-center font-serif font-bold  my-10 border-2 rounded-lg p-10 m-10'>
                <h1 className='text-2xl'>Title: {post.title}</h1>
                <h1 className='text-xl'>Body: {post.body}</h1>
            </div>

            <div className='flex justify-center align-middle'>
                <button onClick={() => {
                    router.push('/');
                }} className="btn btn-active btn-secondary">Back to Home</button>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(post => {
        return {
            params: { postId: `${post.id}` }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    // console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}