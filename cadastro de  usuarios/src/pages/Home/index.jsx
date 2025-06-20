import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])
  const [editingUserId, setEditingUserId] = useState(null)
  const [visibleUsers, setVisibleUsers] = useState([]) // IDs visíveis

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    clearForm()
    getUsers()
  }

  async function updateUser() {
    await api.put(`/usuarios/${editingUserId}`, {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    clearForm()
    setEditingUserId(null)
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  function clearForm() {
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
  }

  function handleEdit(user) {
    setEditingUserId(user.id)
    inputName.current.value = user.name
    inputAge.current.value = user.age
    inputEmail.current.value = user.email
  }

  // Alterna visibilidade das infos de um usuário
  function toggleUserVisibility(id) {
    setVisibleUsers(prev => 
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form onSubmit={e => e.preventDefault()}>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type='text' ref={inputName} />
        <input placeholder="Idade" type='number' ref={inputAge} />
        <input placeholder="E-mail" type='email' ref={inputEmail} />
        {editingUserId ? (
          <button type='button' onClick={updateUser}>Atualizar</button>
        ) : (
          <button type='button' onClick={createUsers}>Cadastrar</button>
        )}
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <button
            onClick={() => toggleUserVisibility(user.id)}
            style={{ marginBottom: '8px' }}
          >
            {visibleUsers.includes(user.id) ? 'Ocultar Informações' : 'Mostrar Informações'}
          </button>

          {visibleUsers.includes(user.id) && (
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
          )}

          <div>
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="Lixeira" style={{ width: '30px', height: '30px' }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
