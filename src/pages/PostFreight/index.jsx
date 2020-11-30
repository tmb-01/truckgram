import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import FormPostFreight from "../../components/FormPostFreight";
import {ContainerPostFreight} from "./styles";

class PostFreight extends Component {
    render() {
        return (
            <>
                {/*<Row>*/}
                    <ContainerPostFreight>
                        <FormPostFreight/>
                    </ContainerPostFreight>
                {/*</Row>*/}
            </>
        );
    }
}

export default PostFreight;