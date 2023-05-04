import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../providers/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const Login = () => {
    const { loginUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const auth = getAuth(app);
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const logedUser = result.user
                setUser(logedUser)
            })
            .catch(error => {
                console.log(error);
            })

    }





    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        if ((password.length < 6)) {
            setError('please provide atlease 6 Charecter password')

            return
        }
        else if (email, password) {

            loginUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    navigate(from, {replace: true})
                    setError('')
                    form.reset()
                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }

    


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    <p className="py-3 text-red-600">{error}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">

                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Dont have an Account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Login</button>
                        </div>



                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"><FontAwesomeIcon icon={faGoogle} style={{ fontSize: 30 }} className="text-center" /> Google</button>


                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-success"><FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} className="text-center" />Github</button>
                </div>
            </div>
        </div>

    );
};

export default Login;