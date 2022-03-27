import React, {ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = React.useState<number[]>([20, 80]);
    const [countStep, setCountStep] = useState<number>(1);


    const onChangeValueCallback = (value: number) => {
        if (value - 1 >= value2[1]) {
            return;
        } else {
            setValue1(value);
            setValue2([value, value2[1]]);
        }
    };
    const onChangeSecondValueCallback = (newValue: number[]) => {
            setValue2([newValue[0], newValue[1]]);
            setValue1(value2[0]);
    };

    const onChangeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCountStep(+e.currentTarget.value);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeValueCallback}
                    value={value1}
                    step={countStep}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: 'flex'}}>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeSecondValueCallback}
                    value={[value2[0], value2[1]]}
                    step={countStep}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <InputComponent
                type={'number'}
                title={'Steps count'}
                defaultValue={1}
                value={countStep}
                onChange={onChangeCountHandler}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputComponentPropsType = DefaultInputPropsType & {}

const InputComponent: React.FC<InputComponentPropsType> = ({
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
        />
    </>

}