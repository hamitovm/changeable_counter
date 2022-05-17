import {UniversalButton} from "../../UniversalButton/UniversalButton";

type AllButtonsBlockPropsType = {
    incrementCounterValue: () => void
    resetCounterValue: () => void
    maxStartCounterValueSetter: () => void
    isDisplayRed:boolean
    resetDisabled: boolean
    settingsChangeHandler: (settingsValue: boolean) => void
    splitCounterType: boolean
}

export const AllButtonsBlock = (props: AllButtonsBlockPropsType) => {
    const showSettingsButton = !props.splitCounterType && (<UniversalButton title={'settings'}
                                                                            onClickHandler={() => props.settingsChangeHandler(true)}/>)
    return (
        <div>
            <UniversalButton title={'inc'}
                             onClickHandler={props.incrementCounterValue}
                             isDisabled={props.isDisplayRed}/>
            <UniversalButton title={'reset'}
                             onClickHandler={props.resetCounterValue}
                             isDisabled={props.resetDisabled}/>
            {showSettingsButton}
        </div>
    )
}