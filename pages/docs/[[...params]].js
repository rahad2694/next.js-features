import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/NavBar';

export default function Doc() {
    const router = useRouter();
    const { params } = router.query;
    // console.log(params);
    return (
        <div>

            <Navbar />

            <h1 className='text-center text-blue-500 font-serif font-bold text-5xl my-10 border-2 rounded-lg p-10 m-10'>This is an Example of Catch All Routes</h1>
            <div className='text-center font-serif font-bold  my-10 border-2 rounded-lg p-10 m-10'>
                <h1 className='text-2xl'>Your Entered Sub-routes are :</h1>
                {
                    params?.map((param, index) => <ul key={index}>
                        <li className='text-green-500 my-2'>{index + 1} : {param}</li>
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