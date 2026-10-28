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
  },
   {
    id: "4652c191-e9e4-4626-ba9c-4ec53a0728be",
    largura: 40.0,
    altura: 20.0,
    profundidade: 10.0,
    peso: 3.14
  }
]

function App() {

  return (
    <section>
      <h1>Pacotes</h1>
   
    <div className = 'pacotes'>
      {data.map(p=> <Pacote pacote = {p} key = {p.id}/>)}

    </div>

    </section>
  )
}

export default App
