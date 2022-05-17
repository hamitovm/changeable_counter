import mod from './Display.module.css'
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";
import {DisplayInputs} from "../DisplayInputs/DisplayInputs";

type DisplayType = {
    settingsOn: boolean
    displayShowContent: number | string
    inputMaxValue: number,
    setInputMaxValue: (inputMaxValue: number) => void,
    inputStartValue: number,
    setInputStartValue: (inputMaxValue: number) => void
    isDisplayRed: boolean
}

export const Display = (props: DisplayType) => {
    let contentToShow = props.settingsOn ?
        (<DisplayInputs inputMaxValue={props.inputMaxValue}
                                                     setInputMaxValue={props.setInputMaxValue}
                                                     inputStartValue={props.inputStartValue}
                                                     setInputStartValue={props.setInputStartValue}
                                                     isDisplayRed={props.isDisplayRed}/>) :
        (<DisplayCounter displayShowContent={props.displayShowContent}
                         isDisplayRed={props.isDisplayRed}/>)
    return (
        <div className={mod.display}>
            {contentToShow}
        </div>
    )
}