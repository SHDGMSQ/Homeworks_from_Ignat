import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.someClass}>
            <div className={s.affairName}>
            {props.affair.name}
                </div>
            <div className={props.affair.priority === 'low' || props.affair.priority === 'middle' ? s.lowColorPriority : s.highColorPriority}>
            [{props.affair.priority}]
                </div>
            <button className={s.removeButton}
                    onClick={deleteCallback}>X
            </button>
        </div>
    )
}

export default Affair
