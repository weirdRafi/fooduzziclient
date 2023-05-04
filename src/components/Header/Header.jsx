import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/Authprovider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
     

    console.log(user);





    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="navbar bg-base-100 shadow-xl sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-green-500 font-bold">Fooduzzi</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                {

                    user ?
                    <span className='text-black flex gap-2'>
                        <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                        <button className='btn btn-success' onClick={handleLogOut}>
                            Sign Out
                        </button>
                    </span> : <span><Link className='btn btn-success' to='/login'>Login</Link></span>
                }
            </div>
        </div>
    );
};

export default Header;