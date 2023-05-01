import React from 'react';
import { Link } from 'react-router-dom';

const Chefdata = (props) => {
    const { id, name, picture, experience, recipes, likes } = props.data;
    console.log(name);
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full' src={picture} alt="name" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{name}</h2>
                <h2>Experience: {experience} year's</h2>
                <h2>Likes: {likes} </h2>
                <h2>Number of Recipes: {recipes}</h2>

                <div className="card-actions justify-start mt-3">
                    <Link className="btn btn-sm btn-success">View Recipes</Link>
                </div>
            </div>
        </div>

    );
};

export default Chefdata;