import Navbar from "../../components/NavBar";
import Image from 'next/image'


export default function Crud({ countries }) {
    console.log(countries[0]);
    return <>
        <Navbar></Navbar>
        <h1 className="text-center text-3xl text-green-500 mb-5">CRUD Feature with Next API</h1>
        <div className="w-3/4 mx-auto grid grid-cols-5">
            {
                countries.map((country, index) => <div key={index}>
                    <div className="text-center border hover:border-red-400 rounded-lg m-3 p-2 cursor-pointer hover:scale-110 delay-100 ease-in-out">
                        <>
                            <p className="uppercase mb-3">{country.name.common}</p>
                            <Image

                                src={country.flags.png}
                                alt="Picture of the flag"
                                width={120}
                                height={70}
                            />
                        </>
                        <button className="btn btn-xs btn-secondary">Delete</button>
                    </div>
                </div>)
            }
        </div>
    </>
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/countries');
    const data = await res.json();

    return {
        props: {
            countries: data
        }
    }
}