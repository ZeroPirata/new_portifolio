import { ContactProps } from "interfaces";
import { FunctionComponent } from "react";
import { BodyContainer } from "./style";

const Contact: FunctionComponent<ContactProps> = () => {
    return (
        <BodyContainer id="contact">
            <p>Contato</p>
        </BodyContainer>
    );
}

export default Contact;