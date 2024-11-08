import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./PostUser.css";
import { useNavigate } from "react-router-dom";

const PostUser = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate(); // This should be a function call

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(`http://localhost:8081/api/employee`, { // Added http://
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to create employee');
            }

            const data = await response.json();
            console.log("Employee created:", data);
            navigate("/"); // Navigate back to home after successful post
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    return (
        <>
            <div className="center-form">
                <h1>Post New Employee</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicDepartment">
                        <Form.Control
                            type="text"
                            name="department"
                            placeholder="Enter department"
                            value={formData.department}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Post Employee
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default PostUser;

