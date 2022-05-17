import React, {useEffect, useState} from 'react';
import './App.css';
import {UniversalButton} from "./components/UniversalButton/UniversalButton";
import {CombinedCounter} from "./components/CombinedCounter/CombinedCounter";
import {SplitCounter} from "./components/SplitCounter/SplitCounter";

function App() {
    //Use states
    let [counterValue, setCounterValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [inputMaxValue, setInputMaxValue] = useState<number>(maxValue)
    let [startValue, setStartValue] = useState<number>(0)
    let [inputStartValue, setInputStartValue] = useState<number>(0)
    let [settingsOn, setSettingsOn] = useState<boolean>(false)
    let [splitCounterType, setSplitCounterType] = useState<boolean>(false)


    //Use effects
    useEffect(() => {
        let localStorageCounterValue = localStorage.getItem('counterValue')
        let localStorageMaxValue = localStorage.getItem('maxValue')
        let localStorageInputMaxValue = localStorage.getItem('inputMaxValue')
        let localStorageStartValue = localStorage.getItem('startValue')
        let localStoragInputStartValue = localStorage.getItem('inputStartValue')
        let localStoragSettingsOn = localStorage.getItem('settingsOn')
        let localStoragSplitCounterType = localStorage.getItem('splitCounterType')
        localStorageCounterValue && setCounterValue(JSON.parse(localStorageCounterValue))
        localStorageMaxValue && setMaxValue(JSON.parse(localStorageMaxValue))
        localStorageInputMaxValue && setInputMaxValue(JSON.parse(localStorageInputMaxValue))
        localStorageStartValue && setStartValue(JSON.parse(localStorageStartValue))
        localStoragInputStartValue && setInputStartValue(JSON.parse(localStoragInputStartValue))
        localStoragSettingsOn && setSettingsOn(JSON.parse(localStoragSettingsOn))
        localStoragSplitCounterType && setSplitCounterType(JSON.parse(localStoragSplitCounterType))

    }, [])
    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counterValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("inputMaxValue", JSON.stringify(inputMaxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("inputStartValue", JSON.stringify(inputStartValue))
        localStorage.setItem("settingsOn", JSON.stringify(settingsOn))
        localStorage.setItem("splitCounterType", JSON.stringify(splitCounterType))

    }, [counterValue, maxValue, inputMaxValue, startValue, inputStartValue, settingsOn, splitCounterType])

    //Функция вывода каунтера либо ошибки
    let displayShowContent = () => {
        if ((inputMaxValue < inputStartValue) ||
            inputStartValue < 0) {
            return 'Incorrect values'
        } else if (maxValue !== inputMaxValue ||
            startValue !== inputStartValue) {
            return 'enter value and press "set"'
        } else {
            return counterValue
        }
    }
    //Display content red function
    const isDisplayRed = () => {
        return (!settingsOn && displayShowContent() >= maxValue) ||
            (displayShowContent() === 'Incorrect values') ||
            (inputStartValue < 0);
    }
    //Функция для кнопки Set
    const maxStartCounterValueSetter = () => {
        setStartValue(inputStartValue)
        setCounterValue(inputStartValue)
        setMaxValue(inputMaxValue)
    }
    //Функция для кнопки Inc
    const incrementCounterValue = () => {
        setCounterValue(++counterValue)
    }
    //Функции для кнопки Reset
    const resetCounterValue = () => {
        setCounterValue(startValue)
    }
    const resetDisabled = () => {
        return (startValue === counterValue)
    }
    //Функции для кнопки Settings
    const settingsChangeHandler = (settingsValue: boolean) => {
        setSettingsOn(settingsValue)
    }
    // Функции для кнопки изменения типа каунтера
    const counterTypeChangeHandler = () => {
        setSplitCounterType(!splitCounterType)
        maxStartCounterValueSetter()
    }

    let counterTypeToShow = splitCounterType ? (<SplitCounter settingsOn={settingsOn}
                                                              displayShowContent={displayShowContent()}
                                                              inputMaxValue={inputMaxValue}
                                                              setInputMaxValue={setInputMaxValue}
                                                              inputStartValue={inputStartValue}
                                                              setInputStartValue={setInputStartValue}
                                                              isDisplayRed={isDisplayRed()}
                                                              incrementCounterValue={incrementCounterValue}
                                                              resetCounterValue={resetCounterValue}
                                                              maxStartCounterValueSetter={maxStartCounterValueSetter}
                                                              resetDisabled={resetDisabled()}
                                                              settingsChangeHandler={settingsChangeHandler}
                                                              splitCounterType={splitCounterType}/>) :
        (<CombinedCounter settingsOn={settingsOn}
                          displayShowContent={displayShowContent()}
                          inputMaxValue={inputMaxValue}
                          setInputMaxValue={setInputMaxValue}
                          inputStartValue={inputStartValue}
                          setInputStartValue={setInputStartValue}
                          isDisplayRed={isDisplayRed()}
                          incrementCounterValue={incrementCounterValue}
                          resetCounterValue={resetCounterValue}
                          maxStartCounterValueSetter={maxStartCounterValueSetter}
                          resetDisabled={resetDisabled()}
                          settingsChangeHandler={settingsChangeHandler}
                          splitCounterType={splitCounterType}/>)


    return (
        <div className="App">
            <UniversalButton title={'Change counter type'} onClickHandler={counterTypeChangeHandler}/>
            <div className={'outerContainer'}>
                {counterTypeToShow}
            </div>
        </div>
    );
}

export default App;
