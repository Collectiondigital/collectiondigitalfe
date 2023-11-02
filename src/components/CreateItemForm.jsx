import "./CSS/CreateItemForm.css";
import { Button, Form } from "react-bootstrap";
export default function CreateCollForm() {

    return (
        <>
            <h1 className="create_new_item">Create New Item</h1>
            <div className="new_item_container">
                <Form>
                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Object Type (ex: Trading cards, Comic Books etc.)" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Date item was made" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Artist/Maker of Item" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Origin of item" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Item Number" />
                    </Form.Group>

                    <Button className="submit_button" type="submit">
                        Create New Item
                    </Button>
                </Form>
            </div>
        </>
    );
}