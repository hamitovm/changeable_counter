import mod from './UniversalInput.module.css'
import {ChangeEvent} from "react";

type UniversalInputPropsType = {
    type: 'number',
    onChange: (value: number) => void,
    title: string,
    inputValue: number
    incorrectValue?: boolean
    for: string
    isDisplayRed: boolean
}

export const UniversalInput = (props: UniversalInputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(event.currentTarget.value))
    }
    const inputStyle = props.isDisplayRed ? `${mod.defaultStyle} ${mod.redStyle}` : `${mod.defaultStyle}`
    return (
        <div className={mod.universalInputBlock}>
            <label htmlFor={props.for}>{props.title}</label>
            <input className={inputStyle} value={props.inputValue} onChange={onChangeHandler} type={props.type} id={props.for}/>
        </div>
    )
}