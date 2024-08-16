import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const intialValues = { email: '', password: '', 'confirm-password': '' }

export default function Register() {
    const [error, setError] = useState('')
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            setError('Password mismatch!');
            return;
        }

        try {
            await register(values.email, values.password)
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }
    const { values, changeHandler, submitHandler } = useForm(intialValues, registerHandler)
    return (
        <><section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" value={values.email} onChange={changeHandler} id="email" name="email" placeholder="youremail@example.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" value={values.password} onChange={changeHandler} name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" value={values['confirm-password']} onChange={changeHandler} name="confirm-password" id="confirm-password" />

                    {error && (
                        <p>
                            <span style={{ fontSize: '24px', color: 'red' }}>{error}</span>
                        </p>
                    )}

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile, click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
        </>
    );
}