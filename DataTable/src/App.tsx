import { useEffect, useState } from "react"
import Dropdown from "./components/Dropdown"
const App = () => {
  const [data,setData] = useState([])

  const [start,setStart] = useState(0)
  const [end,setEnd] = useState(Math.floor(data.length))

  const fetchData = async function(){
    let fetchdata = await fetch('https://jsonplaceholder.typicode.com/users')
    let jsonData = await fetchdata.json()
    setEnd(Math.floor(jsonData.length/2))
    setData(jsonData)
  }

  const next = () => {
    if (end <= data.length-5){
      setStart(end)
      setEnd(end+5)
    } else{
      setStart(end)
      setEnd(data.length)
    }
  }

  const prev = () => {
    if (start >= 5 && start != 0){
      setStart(start-5)
      setEnd(end-5)
    }else{
      setStart(0)
      setEnd(end-5)
    }

  }
  useEffect(() => {
    fetchData()
  },[])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>UserName</td>
            <td>name</td>
            <td>email</td>
          </tr>
          </thead>

          <tbody>
            {data && data.slice(start,end).map(
              (user:{id:number,username:string,name:string,email:string},index:number) => 
                (
                <tr key = {index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
                ))
              }
          </tbody>
          <tfoot>
            <tr>
              <td><button>Show</button></td>
              <td><button onClick={prev}>Prev</button></td>
              <td><Dropdown end = {end} setEnd={setEnd} start={start} setStart = {setStart}/></td>
              <td><button onClick={next}>Next</button></td>
            </tr>
          </tfoot>
      </table>
      
    </div>
  )
}

export default App