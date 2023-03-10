import { useState } from "react";
import axios from "axios";
import { Container, Card, Form, Alert, Button } from 'react-bootstrap'



export default function AddImage({ setUser }) {

    const [error, setError] = useState();
    const [image, setImage] = useState();


     async function handleSubmit(e) {
        
        e.preventDefault();
        console.log(image)
        let data =  new FormData();
        
        
        try {
        let imageUrl = "";
        if (image) {
            
            
            data.append('file', image) 
            data.append('upload_preset', "rqunuhhm")
            
            console.log(data)
            const dataRes = await axios.post(
           "https://api.cloudinary.com/v1_1/dknwufbvr/image/upload",
            data, 
            );
            imageUrl = dataRes.data.url;
            
        }

        const submitPost = {
            image: imageUrl,
        };
        console.log(submitPost)
       await axios.post("http://localhost:3001/api/image/store-image", submitPost);
        } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
        }
    }

    return (
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
           
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Add Image</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                    
                    <input
                        type="file"
                        label="selectImage"
                        className="position-relative mt-2"
                        name="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        id="validationFormik107"
                        
                    />
                
                    </Form.Group>
                    <Button type="submit">upload</Button>
      
                </Form>
                </Card.Body>
            </Card>
           
        </div>
        </Container>
    );
}    