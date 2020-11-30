import React, {Component} from 'react';
import {
    AllFormBox,
    BeforeInput,
    Button, Form,
    FormBox, FormMainBox, GoBack, Logo, Sign, StyledInput, StyledInputBox
} from "./styles";

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            code: '',
            first: true
        }
    }

    render() {
        const submitPhoneNumber = (e) => {
            e.preventDefault();
            this.setState({
                phoneNumber: e.target.phone.value,
            })
        }

        const submitCode = (e) => {
            e.preventDefault();
            this.setState({
                code: e.target.code.value
            })

        }

        const FormInputGetPhoneNumber = () => (
            <div>
                <StyledInputBox className={"my-input"}>
                    <BeforeInput>+998</BeforeInput>
                    <StyledInput placeholder={"Phone Number"}
                                 type={"tel"}
                                 autoFocus
                                 name="phone"
                                 max={9}
                    />
                </StyledInputBox>
                <Button className={"main-bg-color rounded"}>Next <i className="fas fa-angle-double-right"/></Button>
            </div>
        )

        const FormInputVerifyPhoneNumber = () => (
            <div>
                <StyledInputBox className={"my-input"}>
                    <StyledInput className={"text-center"}
                                 type={"number"}
                                 name={"code"}
                                 max={999999}
                                 autoFocus
                    />
                </StyledInputBox>
                <Button className={"main-bg-color rounded"}>Log in</Button>
            </div>
        )


        const goBack = () => {
            this.setState({
                phoneNumber: ''
            })
        }


        return (
            <FormMainBox>
                <FormBox>
                    <Logo>Truckgram</Logo>
                    <AllFormBox>
                        <Form className={this.state.phoneNumber !== "" ? "d-none" : "d-block"}
                              onSubmit={submitPhoneNumber}>
                            <FormInputGetPhoneNumber className={"d-block"}/>
                        </Form>

                        <Form className={this.state.phoneNumber === "" ? "d-none" : "d-block"}
                              onSubmit={submitCode}>
                            <FormInputVerifyPhoneNumber className={"d-block"}/>
                        </Form>

                    </AllFormBox>
                    <Sign className={"placeholder-color"}>Sign in / Sign up</Sign>
                    <GoBack className={this.state.phoneNumber === "" ? "d-none" : "d-block"}
                            onClick={goBack}>Go back</GoBack>
                </FormBox>
            </FormMainBox>
        );
    }
}

export default RegistrationForm;