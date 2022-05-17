import mod from './UniversalButton.module.css'

type UniversalButtonPropsType = {
    title: string,
    onClickHandler: ()=> void
    isDisabled ?: boolean
}

export const UniversalButton = (props: UniversalButtonPropsType) => {

    return (
        <button disabled={props.isDisabled} className={mod.button} onClick={props.onClickHandler}>{props.title}</button>    )
}