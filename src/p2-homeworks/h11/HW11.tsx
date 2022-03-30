import React, {ChangeEvent, useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import {InputComponent} from './common/InputComponent/InputComponent';
import style from '../h11/common/InputComponent/InputComponent.module.css';

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = React.useState<number[]>([0, 100]);
    const [countStep, setCountStep] = useState<number>(1);
    const [disable, setDisable] = useState<boolean>(false);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(100);
    const [error, setError] = useState<string | null>(null);

   /* const checkStepValue = () => {
        let resultValueOfSub = value2[1] - value1
        if (countStep > resultValueOfSub){
            setDisable(true)
            setError('Steps count should be between min and max value')
        } else {
            return
        }
    };*/

    const onChangeValueCallback = (value: number) => {
        if (value - 1 >= value2[1]) {
            setDisable(true);
            return;
        } else {
            setDisable(false);
            setValue1(value);
            setValue2([value, value2[1]]);
        }
    };
    const onChangeSecondValueCallback = (newValue: number[]) => {
        if (newValue[0] >= newValue[1] || newValue[1] <= newValue[0]) {
            setDisable(true);
        }
        if (value1 === newValue[1]) {
            setDisable(false);
        }
        setValue2([newValue[0], newValue[1]]);
        setValue1(value2[0]);

    };
    const onChangeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 0) {
            return;
        } else {
            setCountStep(+e.currentTarget.value);
            setValue1(minValue);
            setValue2([minValue, maxValue]);
            setDisable(false);
        }
    };
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= maxValue) {
            setMinValue(+e.currentTarget.value);
            setError('Min value must be less than max value! Type correct value');
            setDisable(true);
            return;
        } else {
            setError(null);
            setMinValue(+e.currentTarget.value);
            setValue1(+e.currentTarget.value);
            setValue2([+e.currentTarget.value, value2[1]]);
            setDisable(false);
        }
    };
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= minValue) {
            setMaxValue(+e.currentTarget.value);
            setError('Max value must be more than min value! Type correct value');
            setDisable(true);
            return;
        }
        setError(null);
        setMaxValue(+e.currentTarget.value);
        setValue2([value2[0], +e.currentTarget.value]);
        setDisable(false);
    };


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
                    min={minValue}
                    max={maxValue}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: 'flex'}}>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeSecondValueCallback}
                    value={[value2[0], value2[1]]}
                    step={countStep}
                    disable={disable}
                    min={minValue}
                    max={maxValue}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>
            <div className={style.error}>
                {error}
            </div>
            <div className={style.inputComponents}>
                <div className={style.inputComponent}>
                    <InputComponent
                        type={'number'}
                        title={'Steps count'}
                        defaultValue={1}
                        value={countStep}
                        onChange={onChangeCountHandler}
                    />
                </div>
                <div className={style.inputComponent}>
                    <InputComponent
                        type={'number'}
                        title={'Set min value'}
                        defaultValue={0}
                        value={minValue}
                        onChange={onChangeMinValue}
                    />
                </div>
                <div className={style.inputComponent}>
                    <InputComponent
                        type={'number'}
                        title={'Set max value'}
                        defaultValue={100}
                        value={maxValue}
                        onChange={onChangeMaxValue}
                    />
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;

