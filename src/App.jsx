import Main from "./components/Main.jsx"
import Details from "./components/Details.jsx"
import { Route, Routes } from "react-router-dom"
import DbProvider from './components/DbProvider.jsx'

const App = () => {
  return (
    <div>
      <DbProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      </DbProvider>
    </div>
  )
}

export default App
