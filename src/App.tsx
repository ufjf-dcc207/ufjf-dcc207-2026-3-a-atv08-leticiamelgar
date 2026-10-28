import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'


const data: Array<PacoteType> = [
  {
    id: "b0c79326-52ce-450d-be6c-09ceba6bdbcd",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  }
]

function App() {

  return (
    <section>
      <h1>Pacotes</h1>
   
    <div className = 'pacotes'>
      <Pacote pacote = {data[0]}/>

    </div>

    </section>
  )
}

export default App
