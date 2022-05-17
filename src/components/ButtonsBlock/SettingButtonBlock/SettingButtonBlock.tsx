import {UniversalButton} from "../../UniversalButton/UniversalButton";

type SettingButtonBlockPropsType = {
    maxStartCounterValueSetter: () => void
    isDisplayRed: boolean
    settingsChangeHandler: (settingsValue: boolean) => void
}

export const SettingButtonBlock = (props: SettingButtonBlockPropsType) => {
    const onSetClickHandler =() => {
        props.maxStartCounterValueSetter()
        props.settingsChangeHandler(false)
    }
    return (
        <div>
            <UniversalButton title={'set'}
                             onClickHandler={onSetClickHandler}
                             isDisabled={props.isDisplayRed}/>
        </div>
    )
}