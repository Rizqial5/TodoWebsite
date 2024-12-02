import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';



function TodosHome() {

    const [todos, setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        populateTodosData();
    }, []);

    //const contents =
    //    <table className="table table-striped" aria-labelledby="tableLabel">
    //        <thead>
    //            <tr>
    //                <th>Title</th>
    //                <th>Description</th>

    //            </tr>
    //        </thead>
    //        <tbody>
    //            {todos.map(todo =>
    //                <tr key={todo.id}>
    //                    <td>{todo.title}</td>
    //                    <td>{todo.description}</td>
    //                </tr>
    //            )}
    //        </tbody>
    //    </table>;

    const contents =
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((todo) => (
                        <TableRow
                            key={todo.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                {todo.title}</TableCell>
                            <TableCell>{ todo.description}</TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            <h1> Todo List</h1>
            {contents}
        </div>
            
         
    );

    

    function populateTodosData() {
        axios.get('api/todos')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Data",error);
                setLoading(false);
            })
    }


}



export default TodosHome;