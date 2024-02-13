import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type IState = {
  count: number
}

type IAction = | { type: 'increment' } | { type: 'decrement' }

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
  
    case 'decrement':
      if (state.count === 0) return { count: state.count }
      return { count: state.count - 1 }
  }
}

const initialState = { count: 0 }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useReducer</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: 'increment' })}>
          +
        </button>
        <p>count is {state.count}</p>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          -
        </button>
      </div>
    </>
  )
}

export default App
