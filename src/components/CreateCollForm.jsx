import "./CSS/CreateCollForm.css";
import { Button, Form } from "react-bootstrap";
export default function CreateCollForm() {

    return (
        <>
            <h1 className="create_new_collection">Create New Collection</h1>
            <div className="new_collection_container">
                <Form>
                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Collection Name" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Object Type (ex: Trading cards, Comic Books etc.)" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Button className="submit_button" type="submit">
                        Create New Collection
                    </Button>
                </Form>
            </div>
        </>
    );
}

