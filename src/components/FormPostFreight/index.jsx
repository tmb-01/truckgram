import React, {Component, useContext, useState} from 'react';
import {
    Button,
    FormBox,
    Form,
    InputBox,
    SelectDropdown,
    Textarea,
    TitleOfInput,
    MyStyledInputBox,
    MyStyledInput
} from "./styles";
import {AddedToInput} from "../FreightSearch/styles";

import UzbekLang from "../../languages/uzbek/postFreight.json"
import RussainLang from "../../languages/russian/postFreight.json"
import {LangContext} from "../../App";


function FormPostFreight() {

    const isLangUz = useContext(LangContext)
    const lang = isLangUz ? UzbekLang : RussainLang

    const [postFreight, setPostFreight] = useState({
        nameOfFreight: '',
        directionFrom: '',
        directionTo: '',
        typeOfTruck: '',
        date: '',
        volume: '',
        weight: '',
        currency: '',
        price: '',
        description: ''
    })
    const [onChanges, setOnChanges] = useState({
        nameOfFreight: '',
        directionFrom: '',
        directionTo: '',
        typeOfTruck: '',
        date: '',
        volume: '',
        weight: '',
        currency: '',
        price: '',
        description: ''
    })
    const [mouseOverVolume, setMouseOverVolume] = useState(false)
    const [mouseOverWeight, setMouseOverWeight] = useState(false)


    // const {nameOfFreight, directionFrom, directionTo, typeOfTruck, date, volume, weight, currency, price, description} = this.state.postFreight;
    const {nameOfFreight, directionFrom, directionTo, typeOfTruck, date, volume, weight, currency, price, description} = onChanges;

    const onChange = (e) => {
        setOnChanges(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitPostFreight = (e) => {
        const {
            nameOfFreight,
            directionFrom,
            directionTo,
            typeOfTruck,
            date,
            volume,
            weight,
            currency,
            price,
            description
        } = e.target;
        e.preventDefault();

        setPostFreight(prevState => ({
            ...prevState,
            nameOfFreight: nameOfFreight.value,
            directionFrom: directionFrom.value,
            directionTo: directionTo.value,
            typeOfTruck: typeOfTruck.value,
            date: date.value,
            volume: volume.value,
            weight: weight.value,
            currency: currency.value,
            price: price.value,
            description: description.value
        }))
    }

    return (
        <FormBox>
            <h3>{lang.postFreight}</h3>
            <Form onSubmit={submitPostFreight}>
                <InputBox className={"name mt-3"}>
                    <TitleOfInput>{lang.name}</TitleOfInput>
                    <MyStyledInputBox width={"100%"}
                                      className={"my-input ".concat(nameOfFreight !== '' ? " main-border-color" : "")}>
                        <MyStyledInput type={"text"} name={"nameOfFreight"} onChange={onChange}
                                       value={nameOfFreight}/>
                    </MyStyledInputBox>
                </InputBox>
                <InputBox className={"direction"}>
                    <div className={"d-flex justify-content-between"}>
                        <MyStyledInputBox width={"47%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.direction}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input direction-from".concat(directionFrom !== '' ? " main-border-color" : "")}>
                                <MyStyledInput type={"text"} placeholder={lang.from} name={"directionFrom"}
                                               onChange={onChange}
                                               value={directionFrom}/>
                            </MyStyledInputBox>
                        </MyStyledInputBox>
                        <p className={"arrow align-self-center d-block placeholder-color"}> -> </p>
                        <MyStyledInputBox width={"47%"} className={"d-block input-box"}>
                            <TitleOfInput className={"color-transparent"}>.</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input".concat(directionTo !== '' ? " main-border-color" : "")}>
                                <MyStyledInput type={"text"} placeholder={lang.to} name={"directionTo"}
                                               onChange={onChange}
                                               value={directionTo}/>
                            </MyStyledInputBox>
                        </MyStyledInputBox>
                    </div>
                </InputBox>
                <InputBox className={"type-of-truck date"}>
                    <div className={"d-flex justify-content-between"}>
                        <MyStyledInputBox width={"49%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.typeOfTruck}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input m-0 ".concat(typeOfTruck !== '' ? " main-border-color" : "")}>
                                <SelectDropdown name="typeOfTruck"
                                                className={"w-100 border-0 outline-0"}
                                                onChange={onChange}
                                                value={typeOfTruck}
                                >
                                    <option value="tent">{lang.tent}</option>
                                    <option value="ref">{lang.ref}</option>
                                </SelectDropdown>
                            </MyStyledInputBox>
                        </MyStyledInputBox>

                        <MyStyledInputBox width={"49%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.date}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input m-0 ".concat(date !== '' ? " main-border-color" : "")}>
                                <MyStyledInput type={"date"} name={"date"} onChange={onChange} value={date}/>
                            </MyStyledInputBox>
                        </MyStyledInputBox>
                    </div>
                </InputBox>
                <InputBox className={"volume weight"}>
                    <div className={"d-flex justify-content-between"}>
                        <MyStyledInputBox width={"49%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.volume}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input m-0 ".concat(volume !== '' ? " main-border-color" : "")}
                                onMouseOver={() => setMouseOverVolume(true)}
                                onMouseOut={() => setMouseOverVolume(false)}>
                                <MyStyledInput type={"number"} min={0} name={"volume"} onChange={onChange}
                                               value={volume}/>
                                <AddedToInput
                                    className={"px-3 d-flex ".concat(mouseOverVolume || volume !== '' ? " main-bg-color text-white " : "")}>
                                    <span className={"align-self-center"}>{lang.m}<sup>3</sup></span>
                                </AddedToInput>
                            </MyStyledInputBox>
                        </MyStyledInputBox>

                        <MyStyledInputBox width={"49%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.weight}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input m-0 ".concat(weight !== '' ? " main-border-color" : "")}
                                onMouseOver={() => setMouseOverWeight(true)}
                                onMouseOut={() => setMouseOverWeight(false)}>
                                <MyStyledInput type={"number"} min={0} name={"weight"} onChange={onChange}
                                               value={weight}/>
                                <AddedToInput
                                    className={"px-3 d-flex ".concat(mouseOverWeight || weight !== '' ? " main-bg-color text-white" : "")}>
                                    <span className={"align-self-center"}>{lang.t}</span>
                                </AddedToInput>
                            </MyStyledInputBox>
                        </MyStyledInputBox>
                    </div>
                </InputBox>


                <InputBox className={"currency price"}>
                    <div className={"d-flex justify-content-between"}>
                        <MyStyledInputBox width={"49%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.currency}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input m-0 ".concat(currency !== '' ? " main-border-color" : "")}>
                                <SelectDropdown name="currency"
                                                className={"w-100 border-0 outline-0 currency"}
                                                onChange={onChange}
                                                value={typeOfTruck}>
                                    <option value="usd">USD</option>
                                    <option value="uzs">UZS</option>
                                    <option value="rub">RUB</option>
                                </SelectDropdown>
                            </MyStyledInputBox>
                        </MyStyledInputBox>

                        <MyStyledInputBox width={"49%"} className={"d-block input-box"}>
                            <TitleOfInput>{lang.price}</TitleOfInput>
                            <MyStyledInputBox
                                className={"my-input m-0 ".concat(price !== '' ? " main-border-color" : "")}>
                                <MyStyledInput type={"number"} min={0} name={"price"} onChange={onChange}
                                               value={price}/>
                            </MyStyledInputBox>
                        </MyStyledInputBox>
                    </div>
                </InputBox>

                <InputBox className={"message"}>
                    <TitleOfInput>{lang.message}</TitleOfInput>
                    <Textarea className={"my-input w-100 ".concat(description !== '' ? " main-border-color" : "")}
                              name="description" id="description" onChange={onChange}/>
                </InputBox>
                <Button className={"mt-2"}>
                    {lang.submit}
                </Button>
            </Form>

            {/*<h3>{this.state.onChange.nameOfFreight}</h3>*/}
            {/*<p>name{nameOfFreight}</p>*/}
            {/*<p>directionFrom{directionFrom}</p>*/}
            {/*<p>directionTo{directionTo}</p>*/}
            {/*<p>typeOfTruck{typeOfTruck}</p>*/}
            {/*<p>{date}</p>*/}
            {/*<p>{volume}</p>*/}
            {/*<p>{weight}</p>*/}
            {/*<p>{currency}</p>*/}
            {/*<p>{price}</p>*/}
            {/*<p>description{description}</p>*/}
            {/*<h3>{this.state.postFreight.typeOfTruck}</h3>*/}
            {/*<h3>{this.state.postFreight.currency}</h3>*/}

        </FormBox>
    );
}

export default FormPostFreight;