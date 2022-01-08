import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
    onKeyPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''  // need to fix with (?:)
    const errorMessageClass = error ? s.messageOfError : ''


    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onKeyPressEnter}/>
            <button className={s.buttonAdd}
                    disabled={!!error}
                    onClick={addUser}>add
            </button>
            <span className={s.totalCounter}>{totalUsers}</span>
            <div>
                <span className={errorMessageClass}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
