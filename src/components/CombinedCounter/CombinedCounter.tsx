import {Display} from "../Display/Display";
import {ButtonsBlock} from "../ButtonsBlock/ButtonsBlock";
import React from "react";

type CombinedCounterPropsType = {
    settingsOn: boolean
    displayShowContent: number | string
    inputMaxValue: number,
    setInputMaxValue: (inputMaxValue: number) => void,
    inputStartValue: number,
    setInputStartValue: (inputMaxValue: number) => void
    isDisplayRed: boolean
    incrementCounterValue: () => void
    resetCounterValue: () => void
    maxStartCounterValueSetter: () => void,
    resetDisabled: boolean
    settingsChangeHandler: (settingsValue: boolean) => void
    splitCounterType: boolean
}

export const CombinedCounter = (props:CombinedCounterPropsType) => {

    return (
        <div>
            <Display settingsOn={props.settingsOn}
                     displayShowContent={props.displayShowContent}
                     inputMaxValue={props.inputMaxValue}
                     setInputMaxValue={props.setInputMaxValue}
                     inputStartValue={props.inputStartValue}
                     setInputStartValue={props.setInputStartValue}
                     isDisplayRed={props.isDisplayRed}/>
            <ButtonsBlock settingsOn={props.settingsOn}
                          incrementCounterValue={props.incrementCounterValue}
                          resetCounterValue={props.resetCounterValue}
                          maxStartCounterValueSetter={props.maxStartCounterValueSetter}
                          isDisplayRed={props.isDisplayRed}
                          resetDisabled={props.resetDisabled}
                          settingsChangeHandler={props.settingsChangeHandler}
                          splitCounterType={props.splitCounterType}/>
        </div>
    )
}