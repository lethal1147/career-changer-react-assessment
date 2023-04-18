import { useState,useEffect } from 'react'
import Admin from './admin'
import User from './user'
import Layout from './layout'
import styles from "./style/home.module.css"

const mockEmployees = [
  {
    id: 0,
    name: "Kim",
    lastname: 'Dahlstrom',
    position: "Manager"
  },
  {
    id: 1,
    name: "Seed",
    lastname: "Kugimiya",
    position: "Engineer"
  },
  {
    id: 2,
    name: "Praew",
    lastname: "Horwang",
    position: "Designer"
  },
]

const Home = () => {
  const [sector, setSector] = useState('')
  const [employees, setEmployees] = useState(null)
  // inputs template
  const [inputs, setInputs] = useState({
    name: '',
    lastname: '',
    position: '',
    id: 0
  })
  useEffect(() => {
    setEmployees(mockEmployees)
  },[])
  // Delete function
  const handleDelete = (id) => {
    const newEmployees = employees.filter(employee => employee.id !== id)
    setEmployees(newEmployees)
  }

  // onChange function
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    // console.log({...inputs})
    setInputs({...inputs,[name]: value, id: employees.length + 1})
  }

  // Save function
  const handleSave = () => {
    if (inputs.name === '' || inputs.lastname === '' || inputs.position === '') {
      return alert('Invalid Input!')
    }
    setEmployees(prevEmployee => [...prevEmployee, inputs])
    setInputs({
      name: '',
      lastname: '',
      position: '',
      id: 0
    })
  }
  
  // What content to show base on sector state
  const content = sector === "admin" ? <Admin inputs={inputs} onSave={handleSave} onChange={handleChangeInput} onDelete={handleDelete} employees={employees}/> : sector === 'user' ? <User employees={employees}/> : ''
  
  return (
    <Layout>
      <div className={styles.home}>
          <h1>Generation Thailand <br/> React - Assessment</h1>
          <div className={styles.btnContainer}>
            <button onClick={() => setSector('user')}>User Home Sector</button>
            <button onClick={() => setSector('admin')}>Admin Home Sector</button>
          </div>
            <div className={styles.content}>{content}</div>
        </div>
    </Layout>
  )
}



export default Home
