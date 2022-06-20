import Navbar from "../../components/NavBar";
import { useRouter } from "next/router";


export default function AlbumDetails({ album }) {
    const router = useRouter();
    const params = router.query.albumId;

    if (router.isFallback) {
        console.log(router.isFallback);
        return <h1>Loading...............</h1>
    }
    console.log(router.isFallback);
    return <>
        <Navbar></Navbar>
        <h1 className='text-center text-blue-500 font-serif font-bold text-3xl my-10 border-2 rounded-lg p-10 m-10'>Album Details of ID: {params}</h1>
        <p className="text-center">Fallback made TRUE</p>
        <h1 className='uppercase text-center text-green-500 font-serif font-bold text-2xl my-2 border rounded-lg p-10 m-10'>Album Name: {album.title} <br /> UserID:{album.userId}</h1>
    </>
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/albums');
    const data = await res.json();

    const paths = data.slice(0, 5).map(path => {
        return {
            params: { albumId: `${path.id}` }
        }
    });

    // console.log(paths.slice(0, 5))

    return {
        // paths: paths,
        paths: [

        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/albums/${params.albumId}`)
    const data = await res.json();
    return {
        props: {
            album: data
        }
    }
}
