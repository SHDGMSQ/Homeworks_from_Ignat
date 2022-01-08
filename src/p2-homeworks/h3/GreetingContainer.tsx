import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('')
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name === ''){
            setError('Title is required')
        } else {
        alert(`Hello ${name} !`) // need to fix
            addUserCallback(name)
        setName('')}
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13){
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressEnter={onKeyPressEnter}
        />
    )
}

export default GreetingContainer
