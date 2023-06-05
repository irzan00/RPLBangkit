import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import {toast} from 'react-toastify';


const Login = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()

        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user)
            setLoading(false)
            toast.success("Berhasil login")
            navigate("/home")
        } catch(error){
            setLoading(false)
            toast.error(error.message)
        }
    }
    return ( 
    <Helmet title="Login">
        <section>
            <Container>
                <Row>
                   {
                    loading? <Col lg='12' className="text-center"><h5 className="fw-bold">Memuat....</h5></Col> : 
                    <Col lg='6' className="m-auto text-center">
                        

                        <Form className="auth__form" onSubmit={signIn}>
                            <div className="login__text">
                                <h3 className="fw-bold fs-4">Login</h3>
                            </div>
                            <FormGroup className="form__group">
                                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                            </FormGroup>
                            <button type="submit" className="buy__btn auth__btn">Login</button>
                            <p>Belum punya akun? <Link to="/signup">Daftar</Link></p>
                        </Form>
                    </Col>
                   } 
                </Row>
            </Container>
        </section>
    </Helmet>
    
    
    )
}

export default Login;