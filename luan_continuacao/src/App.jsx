import { useState } from 'react' 
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>componente 1</h3>
    <p>sei la meu, arrogante</p>
    <Aviso urgente={false} />

    <h3>componente 2</h3>
    <p>tem que mudar o texto ent eu mudei aqui</p>
    <Aviso urgente={true} />

    <h3>componente 3</h3>
    <p>o jogo "Super mario RPG" é um jogo MUITO bom, eu recomendo jogar quando você estiver com o tempo livre, ele tem uma mecanica de double hit se você acertar o time do ataque, sem dizer que é um jogo de estrategia e preparo, tem alguns personagens no jogo, eu por enquanto só conheco o: mario, mallow, bowser (sim o bowser!) a peach e o Geno</p>
    <Aviso urgente={false} />
    </>
  )
}

export default App
