import React
    // , {Component, useState}
    , {useContext, useState} from 'react';
import {
    AddedToInput,
    ChosenTypeBox,
    Direction,
    DirectionInput,
    DirectionInputBox,
    MyInput,
    MyInputBox,
    SearchBox, SearchButton,
    TypeOfTruck,
    TypeOfTruckButton
} from "./styles";
import Row from "rsuite/es/Row";
import Col from "rsuite/es/Col";
import RangeSlider from "rsuite/es/RangeSlider";
import InputGroup from "rsuite/es/InputGroup";
import InputNumber from "rsuite/es/InputNumber";
import Example2 from "./index2";
import {StyledInputBox} from "../RegistrationForm/styles";
import {useDispatch, useSelector} from "react-redux";
import {
    date,
    directionFrom,
    directionTo,
    priceFrom,
    priceTo,
    typeOfTruck, volume,
    weight
} from "../../redux/search/searchActions";
import {LangContext} from "../../App";
import UzbekLang from "../../languages/uzbek/searchFreight.json";
// import RussainLang from "../../languages/russian/postFreight.json";
import RussainLang from "../../languages/russian/searchFreight.json";

function FreightSearch({setFilterOpen}) {

    const isLangUz = useContext(LangContext)
    const lang = isLangUz ? UzbekLang : RussainLang

    const [state, setState] = useState(
        {
            searchValue: {
                chosenTruckType: '',
                direction: {
                    from: '',
                    to: '',
                },
                price: {
                    from: '',
                    to: ''
                },
                date: "",
                weight: '',
                volume: '',
                mouseOverVolume: false,
                mouseOverWeight: false
            }
        }
    )


    // this.state = {
    //     typeOfTruck: [
    //         {
    //             id: 1,
    //             type: "Tent"
    //         },
    //         {
    //             id: 2,
    //             type: "Ref"
    //         }
    //     ],
    //     searchValue: {
    //         chosenTruckType: "",
    //         direction: {
    //             from: '',
    //             to: '',
    //         },
    //         price: {
    //             from: '',
    //             to: ''
    //         },
    //         date: "",
    //         weight: '',
    //         volume: '',
    //         mouseOverVolume: false,
    //         mouseOverWeight: false
    //     }
    // }

    // render() {
    // const dispatch = useDispatch()

    const chooseTypeOfTruck = (type) => {
        setState(prevState => ({...prevState, searchValue: {...prevState.searchValue, chosenTruckType: type}}))
        // dispatch(typeOfTruck(type.type))
    }
    const removeChosenTypeOfTruck = () => {
        setState(prevState => ({...prevState, searchValue: {...prevState.searchValue, chosenTruckType: ""}}))
        // dispatch(typeOfTruck(''))

    }

    // const [value, setValue] = React.useState([10, 50]);

    // const stateManagement = useSelector(state => state);

    // const onClickTypeOfTruck = (value) => {
    //     chooseTypeOfTruck(value);
    //     // dispatch(typeOfTruck(value))
    // }





    return (
        <SearchBox>
            <p className={"mb-1"}>{lang.typeOfTruck}</p>
            <TypeOfTruck>
                {state.searchValue.chosenTruckType === "" ?
                    <>
                        <TypeOfTruckButton type={"submit"} onClick={() => chooseTypeOfTruck(lang.tent)}>
                            {lang.tent}
                        </TypeOfTruckButton>
                        <TypeOfTruckButton type={"submit"} onClick={() => chooseTypeOfTruck(lang.ref)}>
                            {lang.ref}
                        </TypeOfTruckButton>
                    </>
                    : <ChosenTypeBox className={"d-flex"}>
                        <TypeOfTruckButton className={"main-bg-color"} chosen>
                            {state.searchValue.chosenTruckType}
                        </TypeOfTruckButton>
                        <button className={"border-0 bg-transparent"} style={{outline: 0}}
                                onClick={() => removeChosenTypeOfTruck()}>
                            <i className="fas fa-times d-block align-self-center text-secondary"/>
                        </button>
                    </ChosenTypeBox>}
            </TypeOfTruck>
            <hr/>
            <p className={"mb-1"}>{lang.direction}</p>
            <Direction>
                <MyInputBox>
                    <MyInput
                        className={"my-input ".concat(state.searchValue.direction.from !== "" ? "main-border-color" : "")}
                        placeholder={lang.from}
                        type={"country"}
                        onChange={
                            e => {
                                setState(prevState => ({
                                    ...prevState,
                                    searchValue: {
                                        ...prevState.searchValue, direction: {
                                            ...prevState.searchValue.direction,
                                            // from: e.target.value
                                            from: e.target.value
                                        }
                                    }
                                }));
                                // dispatch(directionFrom(e.target.value))
                            }
                        }
                    />
                </MyInputBox>
                <span className={"d-block align-self-center"}>
                        ->
                    </span>
                <MyInputBox>
                    <MyInput
                        className={"my-input ".concat(state.searchValue.direction.to !== "" ? "main-border-color" : "")}
                        placeholder={lang.to}
                        type={"text"}
                        onChange={
                            e => {
                                setState(prevState => ({
                                    ...prevState,
                                    searchValue: {
                                        ...prevState.searchValue, direction: {
                                            ...prevState.searchValue.direction,
                                            to: e.target.value
                                        }
                                    }
                                }));
                                // dispatch(directionTo(e.target.value))
                            }
                        }
                    />
                </MyInputBox>
            </Direction>
            <hr/>
            <p className={"mb-1"}>{lang.price}</p>
            <Direction>
                <MyInputBox>
                    <MyInput
                        className={"my-input".concat(state.searchValue.price.from !== "" ? "main-border-color" : "")}
                        placeholder={lang.from}
                        min={1}
                        type={"number"}
                        onChange={
                            e => {
                                setState(prevState => ({
                                    ...prevState,
                                    searchValue: {
                                        ...prevState.searchValue, price: {
                                            ...prevState.searchValue.price,
                                            from: e.target.value
                                        }
                                    }
                                }));
                                // dispatch(priceFrom(e.target.value))
                            }
                        }
                    />
                </MyInputBox>
                <span className={"d-block align-self-center"}>
                        ->
                    </span>
                <MyInputBox>
                    <MyInput
                        className={"my-input ".concat(state.searchValue.price.to !== "" ? "main-border-color" : "")}
                        placeholder={lang.to}
                        min={0}
                        step={10}
                        type={"number"}
                        onChange={
                            e => {
                                setState(prevState => ({
                                    ...prevState,
                                    searchValue: {
                                        ...prevState.searchValue, price: {
                                            ...prevState.searchValue.price,
                                            to: e.target.value
                                        }
                                    }
                                }));
                                // dispatch(priceTo(e.target.value))
                            }
                        }
                    />
                </MyInputBox>
            </Direction>
            <hr/>
            <p className={"mb-1"}>{lang.date}</p>
            <MyInputBox className={"w-100"}>
                <MyInput
                    className={"my-input ".concat(state.searchValue.date !== "" ? "main-border-color" : "placeholder-color")}
                    // placeholder={"date"}
                    type={"date"}
                    onChange={
                        e => {
                            setState(prevState => ({
                                ...prevState,
                                searchValue: {
                                    ...prevState.searchValue, date: e.target.value
                                }
                            }));
                            // dispatch(date(e.target.value))
                        }
                    }
                />
            </MyInputBox>
            <hr/>
            <p className={"mb-1"}>{lang.weight}</p>
            <MyInputBox
                className={"w-100 my-input ".concat(state.searchValue.weight !== "" ? "main-border-color" : "")}
                onMouseOver={() => setState(prevState => ({...prevState, mouseOverWeight: true}))}
                onMouseOut={() => setState(prevState => ({...prevState, mouseOverWeight: false}))}
            >
                <MyInput type={"number"}
                         className={"border-0"}
                    // className={"my-input ".concat(this.state.searchValue.weight !== "" ? "main-border-color" : "")}
                         placeholder={lang.weight.toLowerCase()}
                         onChange={
                             e => {
                                 setState(prevState => ({
                                     ...prevState,
                                     searchValue: {
                                         ...prevState.searchValue, weight: e.target.value
                                     }
                                 }));
                                 // dispatch(weight(e.target.value))
                             }
                         }
                         addition
                />
                <AddedToInput
                    className={state.searchValue.weight !== '' || state.mouseOverWeight ? "main-bg-color text-white" : "salom"}>
                    {lang.t}
                </AddedToInput>
            </MyInputBox>

            <hr/>

            <p className={"mb-1"}>{lang.volume}</p>
            <MyInputBox
                className={"w-100 my-input".concat(state.searchValue.volume !== "" ? " main-border-color" : "")}
                onMouseOver={() => setState(prevState => ({...prevState, mouseOverVolume: true}))}
                onMouseOut={() => setState(prevState => ({...prevState, mouseOverVolume: false}))}
            >
                <MyInput type={"number"}
                         className={"border-0"}
                    // className={"my-input ".concat(this.state.searchValue.volume !== "" ? "main-border-color" : "")}
                         placeholder={lang.volume}
                         onChange={
                             e => {
                                 setState(prevState => ({
                                     ...prevState,
                                     searchValue: {
                                         ...prevState.searchValue, volume: e.target.value
                                     }
                                 }));
                                 // dispatch(volume(e.target.value))
                             }
                         }
                         addition
                />

                <AddedToInput
                    className={state.searchValue.volume !== '' || state.mouseOverVolume ? "main-bg-color text-white" : "salom"}>
                    {lang.m}<sup>3</sup>
                </AddedToInput>

            </MyInputBox>

            <SearchButton onClick={() => {
                setFilterOpen(false)
            }}>Search</SearchButton>


            {/*<h1>{this.state.searchValue.chosenTruckType===""?"empty":"full"} <br/>*/}
            {/*{this.state.searchValue.chosenTruckType}*/}
            {/*</h1>*/}
            {/*<p>{this.state.searchValue.direction.from}</p>*/}
            {/*<p>{this.state.searchValue.direction.to}</p>*/}
            {/*<p>{this.state.searchValue.price.from}</p>*/}
            {/*<p>{this.state.searchValue.price.to}</p>*/}
            {/*<p>{this.state.searchValue.date}</p>*/}
            {/*<p>{stateManagement.typeOfTruck}</p>*/}
            {/*<p>{stateManagement.directionFrom}</p>*/}
            {/*<p>{stateManagement.directionTo}</p>*/}
            {/*<p>{stateManagement.priceFrom}</p>*/}
            {/*<p>{stateManagement.priceTo}</p>*/}
            {/*<p>{stateManagement.date}</p>*/}
            {/*<p>{stateManagement.weight}</p>*/}
            {/*<p>{stateManagement.volume}</p>*/}



        </SearchBox>
    );
}

// }

export default FreightSearch;