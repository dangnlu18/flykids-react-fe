import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Styled from "styled-components";
// import axios from "axios";

const Div = Styled.div`
    border: 2px solid gray;
    background-color: #287880;
    padding: 10px;
    width: 600px;
    margin: 0 auto;
    margin-top: 300px;
`;

const H2 = Styled.h2`
    padding: 0px;
    margin: 20px;
    color: white;
`;

const Button = Styled.button`
padding: 10px 20px 10px 20px;
background-color: lightblue;
margin-top: 20px;
`;

const Login = ({ handleChange, status }) => {
    
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status])
    }, [status]);

        return (
            <Div>
                <Form>
                    <div className="field">
                        <label>
                           <div> <H2>Username</H2> </div>
                            <Field
                                className="field"
                                type="text"
                                name="username"
                                placeholder="Enter Username..."
                                // value={values.username}
                                onChange={handleChange}
                            />
                        </label>

                        <div className="field">
                        <label>
                        <div> <H2>Password</H2> </div>
                            <Field  
                                type="password"
                                name="password"
                                placeholder="Enter Password..."
                                onChange={handleChange}
                            />
                        </label>
                        <div><Button>Log In</Button></div>

                    </div>
                    </div>
                </Form>
            </Div>
        )
}

const LoginFormik = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter a username"),
        password: Yup.string().required("Please enter a password!")
    }),
})(Login);

export default LoginFormik;