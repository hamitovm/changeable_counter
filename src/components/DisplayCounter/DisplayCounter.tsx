import mod from "./DisplayCounter.module.css";

type DisplayCounterType = {
    displayShowContent: number | string
    isDisplayRed: boolean
}

export const DisplayCounter = (props: DisplayCounterType) => {
    const displayCounterStyle = `${props.isDisplayRed ? mod.redStyle : ''} 
    ${typeof props.displayShowContent === 'number' ? mod.displayCounterStyle : mod.displayTextStyle}`

    return (
        <div className={displayCounterStyle}>
            {props.displayShowContent}
        </div>
    )
}