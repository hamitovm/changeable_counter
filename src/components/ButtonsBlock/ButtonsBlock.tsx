import mod from './ButtonsBlock.module.css'
import {AllButtonsBlock} from "./AllButtonsBlock/AllButtonsBlock";
import {SettingButtonBlock} from "./SettingButtonBlock/SettingButtonBlock";

type ButtonsBlockPropsType = {
    settingsOn: boolean
    incrementCounterValue: () => void
    resetCounterValue: () => void
    maxStartCounterValueSetter: () => void,
    isDisplayRed: boolean
    resetDisabled: boolean
    settingsChangeHandler: (settingsValue: boolean) => void
    splitCounterType: boolean
}

export const ButtonsBlock = (props: ButtonsBlockPropsType) => {
    let contentToShow = props.settingsOn ?
        (<SettingButtonBlock maxStartCounterValueSetter={props.maxStartCounterValueSetter}
                             isDisplayRed={props.isDisplayRed}
                             settingsChangeHandler={props.settingsChangeHandler}/>) :
        ( <AllButtonsBlock  incrementCounterValue={props.incrementCounterValue}
                            resetCounterValue={props.resetCounterValue}
                            maxStartCounterValueSetter={props.maxStartCounterValueSetter}
                            isDisplayRed={props.isDisplayRed}
                            resetDisabled={props.resetDisabled}
                            settingsChangeHandler={props.settingsChangeHandler}
                            splitCounterType={props.splitCounterType}/>)
    return (
        <div className={mod.buttonsBlock}>
            {contentToShow}
        </div>
    )
}