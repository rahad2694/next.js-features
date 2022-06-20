import Navbar from "../../components/NavBar";
import Link from 'next/link'

export default function Albums({ albums }) {
    return <>
        <Navbar></Navbar>
        <h1 className='text-center text-blue-500 font-serif font-bold text-3xl my-10 border-2 rounded-lg p-10 m-10'>Welcome to Album List</h1>
        <div className="w-2/4 mx-auto">
            {
                albums.map(album => <ul key={album.id}>
                    <li className="text-center border rounded-lg m-3 p-2 cursor-pointer hover:text-red-500">
                        <Link href={`/albums/${album.id}`}><a className="uppercase">{album.id} : {album.title}</a></Link>
                    </li>
                </ul>)
            }
        </div>
    </>
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/albums');
    const data = await res.json();

    return {
        props: {
            albums: data
        }
    }
}