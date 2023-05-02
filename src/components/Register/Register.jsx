import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/Authprovider';


const Register = () => {
    const { registerUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        console.log(name, email, url, password);

        
        if ((password.length < 6)) {
            setError('please provide atlease 6 Charecter password')

            return
        }
        else if(email, password){
            registerUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('')
            })
            .catch(err => {
                console.log(err);
            })
        }
            
        


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Please Register</h1>
                        <p className="py-3 text-red-600">{error}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Photo URL" name="url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;