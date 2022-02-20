import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState('')
  const [enterAge, setEnterAge] = useState('')
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid input'
      })
      return
    }
    if (+enterAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter valid age'
      })

      return
    }
    props.onAddUser(enterUsername, enterAge)
    setEnterAge('')
    setEnterUsername('')
  }

  const addUsernameHandler = (event) => {
    setEnterUsername(event.target.value)
  }

  const addAgeHandler = (event) => {
    setEnterAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={enterUsername}
            onChange={addUsernameHandler}
          />
          <label htmlFor='age'>Age</label>
          <input
            type='numbefr'
            id='age'
            value={enterAge}
            onChange={addAgeHandler}
          />
          <button type='submit'>Add User</button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
