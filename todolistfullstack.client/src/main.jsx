import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/*import TodosHome from './TodosHome'*/
import App from './App'
import TodosHome from './TodosHome'

//import { ThemeProvider, createTheme } from '@mui/material/styles';
//import CssBaseline from '@mui/material/CssBaseline';
//const theme = createTheme({
//    palette: {
//        mode: 'light', // Ganti dengan 'dark' untuk tema gelap
//        primary: {
//          main: '#1976d2', // Warna utama
//        },
//        secondary: {
//          main: '#dc004e', // Warna sekunder
//        },
//    }
//});


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <TodosHome/>
    </StrictMode>
)
