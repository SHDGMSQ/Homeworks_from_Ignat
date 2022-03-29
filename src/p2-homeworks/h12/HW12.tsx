import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'some', 'gold', 'cool', 'free'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themeReducer.theme);

    const dispatch = useDispatch();
    // useDispatch, onChangeCallback

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option));
    };
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
