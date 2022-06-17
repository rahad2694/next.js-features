import Navbar from "../../components/NavBar";


export default function TodoList({ todos }) {
    return <>
        <Navbar></Navbar>
        <h1 className="text-center text-3xl text-green-500">Welcome to all To-DO List</h1>
        <div className="w-2/4 mx-auto">
            {
                todos.map(todo => <ul key={todo.id}>
                    <li className="text-center border rounded-lg m-3 p-2 cursor-pointer"><p className="uppercase">{todo.id} : {todo.title}</p>
                        <p>Status: <span className={`${todo.completed ? 'text-green-500' : 'text-red-500'}`}>{todo.completed ? 'DONE' : 'Not DONE'}</span></p>
                    </li>
                </ul>)
            }
        </div>
    </>
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/todos');
    const data = await res.json();

    return {
        props: {
            todos: data
        }
    }
}