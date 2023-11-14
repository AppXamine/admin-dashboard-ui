import { CategoryScale, Chart } from 'chart.js';
import './App.css'
import AppRouter from './config/Routes'

Chart.register(CategoryScale);

function App() {


  return (
    <>
    <AppRouter/>
    </>
  )
}

export default App
