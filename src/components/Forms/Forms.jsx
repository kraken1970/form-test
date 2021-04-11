import { useState, useEffect } from 'react'
// import Input from '../Input/Input'

const Forms = () => {
  const [name, setName] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [nameError, setNameError] = useState('Заполните поле')

  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Заполните поле')

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || nameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, emailError])

  const changeName = (e) => {
    setName(e.target.value)
    const re = /^[a-zA-Z ]+$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Имя не должно содержать цифры и символы')
    } else {
      setNameError('')
    }
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Данный Email некорректен')
    } else {
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setFormValid(false)
    console.log(e)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Name:</p>
            <input
              type='text'
              name='name'
              value={name}
              onChange={changeName}
              placeholder='Введите имя'
              onBlur={blurHandler}
            />
          </label>

          {nameDirty && nameError && (
            <div>
              <p>{nameError}</p>
            </div>
          )}
        </div>

        <div>
          <label>
            <p>Email:</p>
            <input
              type='text'
              name='email'
              value={email}
              onChange={changeEmail}
              placeholder='Введите email'
              onBlur={blurHandler}
            />
          </label>

          {emailDirty && emailError && (
            <div>
              <p>{emailError}</p>
            </div>
          )}
        </div>

        <button disabled={!formValid} type='submit'>
          Регистрация
        </button>
      </form>
    </>
  )
}

export default Forms