import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import style from './InputComponent.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputComponentPropsType = DefaultInputPropsType & {}

export const InputComponent: React.FC<InputComponentPropsType> = ({
                                                                      ...restProps
                                                                  }) => {
    return <>
        <div>
            {restProps.title}
        </div>
        <input type={restProps.type}
               defaultValue={restProps.defaultValue}
               value={restProps.value}
               onChange={restProps.onChange}
               className={style.input}
        />
    </>;

};