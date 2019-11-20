import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Styled from "styled-components";
// import axios from "axios";

const Login = ({ values, handleChange, status }) => {
    
    const [ users, setUsers ] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        status && setUsers(users => [...users, status])
    }, [status]);

        return (
            <Div>
              <h1>Log In</h1>
                <Form>
                    <div className="field">
                        <label>
                           <div><H3>Email</H3></div>
                            <Field
                                className="field"
                                type="text"
                                name="email"
                                placeholder="Enter Email..."
                                value={values.email}
                                onChange={handleChange}
                            />
                        </label>

                        <div className="field">
                        <label>
                        <div> <H3>Password</H3> </div>
                            <Field  
                                type="password"
                                name="password"
                                placeholder="Enter Password..."
                                onChange={handleChange}
                            />
                        </label>
                            <div><Button type="submit">Log In</Button></div>
                        </div>
                    </div>
                </Form>
            </Div>
        );
}

const LoginFormik = withFormik({
    mapPropsToValues: () => ({email: '' , password: '' }),


    validationSchema: Yup.object().shape({
        email: Yup.string().required("Please enter a email"),
        password: Yup.string().required("Please enter a password!")
    }),
})(Login);

export default LoginFormik;

const Div = Styled.div`
    border: 2px solid gray;
    background-color: #932F6D;
    padding: 10px;
    width: 600px;
    margin: 0 auto;
    margin-top: 150px;
`;

const H3 = Styled.h3`
    padding: 0px;
    margin: 20px;
    color: white;
`;

const Button = Styled.button`
padding: 10px 20px 10px 20px;
background-color: lightblue;
margin-top: 20px;
`;