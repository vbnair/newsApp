import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"


const App = () => {
// state to store cat
const [category, setCategory] = useState("general")

  return (
    <div>
<Navbar setCategory={setCategory}/>
<NewsBoard category={category}/>
    </div>
  )
}

export default App
