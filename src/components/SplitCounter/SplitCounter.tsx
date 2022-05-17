import mod from './SplitCounter.module.css'

import {CombinedCounter} from "../CombinedCounter/CombinedCounter";
import React from "react";

type SplitCounterPropsType = {
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

export const SplitCounter = (props: SplitCounterPropsType) => {
    return (
        <div className={mod.splitCounterOuterBlock}>
            <CombinedCounter settingsOn={false}
                             displayShowContent={props.displayShowContent}
                             inputMaxValue={props.inputMaxValue}
                             setInputMaxValue={props.setInputMaxValue}
                             inputStartValue={props.inputStartValue}
                             setInputStartValue={props.setInputStartValue}
                             isDisplayRed={props.isDisplayRed}
                             incrementCounterValue={props.incrementCounterValue}
                             resetCounterValue={props.resetCounterValue}
                             maxStartCounterValueSetter={props.maxStartCounterValueSetter}
                             resetDisabled={props.resetDisabled}
                             settingsChangeHandler={props.settingsChangeHandler}
                             splitCounterType={props.splitCounterType}/>
            <CombinedCounter settingsOn={true}
                             displayShowContent={props.displayShowContent}
                             inputMaxValue={props.inputMaxValue}
                             setInputMaxValue={props.setInputMaxValue}
                             inputStartValue={props.inputStartValue}
                             setInputStartValue={props.setInputStartValue}
                             isDisplayRed={props.isDisplayRed}
                             incrementCounterValue={props.incrementCounterValue}
                             resetCounterValue={props.resetCounterValue}
                             maxStartCounterValueSetter={props.maxStartCounterValueSetter}
                             resetDisabled={props.resetDisabled}
                             settingsChangeHandler={props.settingsChangeHandler}
                             splitCounterType={props.splitCounterType}/>
        </div>
    )
}















// <div className={mod.splitCounterOuterBlock}>
//     <div className={mod.splitCounterInnerBlock}>
//         <DisplayCounter displayShowContent={props.displayShowContent}
//                         isDisplayRed={props.isDisplayRed}/>
//         <AllButtonsBlock  incrementCounterValue={props.incrementCounterValue}
//                           resetCounterValue={props.resetCounterValue}
//                           maxStartCounterValueSetter={props.maxStartCounterValueSetter}
//                           isDisplayRed={props.isDisplayRed}
//                           resetDisabled={props.resetDisabled}
//                           settingsChangeHandler={props.settingsChangeHandler}/>
//     </div>
//     <div className={mod.splitCounterInnerBlock}>
//         <DisplayInputs inputMaxValue={props.inputMaxValue}
//                        setInputMaxValue={props.setInputMaxValue}
//                        inputStartValue={props.inputStartValue}
//                        setInputStartValue={props.setInputStartValue}
//                        isDisplayRed={props.isDisplayRed}/>
//         <SettingButtonBlock maxStartCounterValueSetter={props.maxStartCounterValueSetter}
//                             isDisplayRed={props.isDisplayRed}
//                             settingsChangeHandler={props.settingsChangeHandler}/>
//     </div>
// </div>