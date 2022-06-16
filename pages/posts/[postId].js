import { useRouter } from 'next/router';
import Link from 'next/link';



export default function Post({ post }) {
    // console.log(posts);
    const router = useRouter();
    const { postId } = router.query;
    // console.log(postId);
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

            <h1 className='text-center text-green-500 font-serif font-bold text-2xl my-10 border-2 rounded-lg p-10 m-10'>Post Details:</h1>

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
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}