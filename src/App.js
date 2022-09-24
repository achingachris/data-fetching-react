import { useState, useEffect } from 'react'

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([])
  // const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => { 
    fetch("http://api.open-notify.org/astros.json").then((response) => response.json()).then((data) => {
      setPeopleInSpace(data.people)
    })
  }, [])

  // if (isLoaded) return <h1>Loading...</h1>
    
  return (
    <div className='App'>
      <h1>Data Fecthing</h1>
      {peopleInSpace.map((person) => person.name)}
    </div>
  )
}

export default App
