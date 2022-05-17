import {UniversalInput} from "../UniversalInput/UniversalInput";

type DisplayInputsPropsType = {
    inputMaxValue: number,
    setInputMaxValue: (inputMaxValue: number) => void,
    inputStartValue: number,
    setInputStartValue: (inputMaxValue: number) => void
    isDisplayRed: boolean
}


export const DisplayInputs = (props: DisplayInputsPropsType) => {
    return (
        <div>
            <UniversalInput
                type={'number'}
                onChange={props.setInputMaxValue}
                title={'Max value:'}
                inputValue={props.inputMaxValue}
                incorrectValue={false}
                for={'maxValue'}
                isDisplayRed={props.inputMaxValue < props.inputStartValue}/>
            <UniversalInput
                type={'number'}
                onChange={props.setInputStartValue}
                title={'Start value:'}
                inputValue={props.inputStartValue}
                incorrectValue={false}
                for={'startValue'}
                isDisplayRed={props.isDisplayRed}/>
        </div>
    )
}