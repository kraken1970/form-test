import { useState, useEffect } from 'react'
import classNames from 'classnames'
import sts from './Forms.module.scss'

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
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={sts.form}>
        <div className={sts.formWrapper}>
          <p className={sts.labelName}>Name:</p>
          <input
            type='text'
            name='name'
            value={name}
            onChange={changeName}
            placeholder='Введите имя'
            onBlur={(e) => blurHandler(e)}
            className={sts.input}
          />

          {nameDirty && nameError && (
            <div
              className={classNames(sts.errorBlockPrimary, {
                [sts.errorBlockSecondary]: nameError !== 'Заполните поле',
              })}
            >
              {nameError}
            </div>
          )}
        </div>

        <div className={sts.formWrapper}>
          <p className={sts.labelName}>Email:</p>
          <input
            type='text'
            name='email'
            value={email}
            onChange={changeEmail}
            placeholder='Введите email'
            onBlur={(e) => blurHandler(e)}
            className={sts.input}
          />

          {emailDirty && emailError && (
            <div
              className={classNames(sts.errorBlockPrimary, {
                [sts.errorBlockSecondary]: emailError !== 'Заполните поле',
              })}
            >
              {emailError}
            </div>
          )}
        </div>

        <button
          disabled={!formValid}
          type='submit'
          className={classNames(sts.buttonPrimary, {
            [sts.buttonDisabled]: !formValid,
          })}
        >
          Регистрация
        </button>
      </form>
    </>
  )
}

export default Forms
