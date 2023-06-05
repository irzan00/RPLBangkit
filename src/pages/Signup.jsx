import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const signup = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
                );

                const user = userCredential.user;
                const storageRef = ref(storage, `image/${Date.now()+ username}`);
                const uploadTask = uploadBytesResumable(storageRef,file);
                uploadTask.on((error)=>{
                    toast.error(error.message)
                }, ()=>{
                        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                    
                        //update user profile
                        await updateProfile(user,{
                            displayName:username,
                            photoURL:downloadURL,
                        });
                        //store user data
                        await setDoc(doc(db, 'users', user.uid),{
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                        });        
                    
                });
            });
            
           setLoading(false)
           toast.success("Akun telah dibuat")
           navigate("/login")
        } catch (error){
            {
                setLoading(false)
                toast.error("Sepertinya ada yang salah bro..");
            }
        }
    }
    return ( 
    <Helmet title="Signup">
        <section>
            <Container>
                <Row>
                    {
                        loading? <Col lg = "12" className="text-center"><h5>Memuat.....</h5></Col> : 
                        <Col lg='6' className="m-auto text-center">
                        <Form className="auth__form" onSubmit={signup}>
                            <div className="login__text">
                                <h3 className="fw-bold fs-4">Regristrasi Akun</h3>
                            </div>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                            </FormGroup>
                            <FormGroup className="form__file">
                                <input type="file" onChange={e=>setFile(e.target.files[0])}/>
                            </FormGroup>
                            <button type="submit" className="buy__btn auth__btn" onSubmit={signup}>Buat Akun</button>
                            <p>Sudah punya akun? <Link to="/login">Masuk</Link></p>
                        </Form>
                    </Col>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
    
    
    )
}

export default Signup;