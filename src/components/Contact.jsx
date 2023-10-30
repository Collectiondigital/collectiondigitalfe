import "./CSS/Contact.css";
import { Button, Form, FloatingLabel } from "react-bootstrap";


export default function Contact() {

    return (
        <>
            <div className="contact_container">
                <h1 className="contact">Contact Us</h1>
                <Form>
                    <Form.Group className="mb-2" controlId="inlineFormInput">

                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                            className="message_field"
                            as="textarea"
                            placeholder="Leave a comment here"
                        />
                    </FloatingLabel>

                    <Button className="submit_button" type="submit">
                        Submit
                    </Button>
                </Form>






            </div>

        </>
    );

}