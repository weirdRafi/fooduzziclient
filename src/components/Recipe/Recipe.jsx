import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = (props) => {
    console.log(props);
    const { food_name, cooking_method, country, image, ingredients, rating } = props.r;

    const notify =()=>{
        toast("Added to favorite!");
    }
    return (
        <div>
            <div className="card mx-auto w-80 bg-base-100 shadow-xl">
                <figure><img src={image} className='w-full h-60' alt="Album" /></figure>
                <div className="card-body text-start">
                    <h2 className="card-title">{food_name}</h2>
                    <h2><strong>Country:</strong> {country}</h2>
                    <h2><strong>Rating:</strong> {rating}</h2>
                    <h2><strong>Cooking Method:</strong> {cooking_method} </h2>

                    <h2> <strong>Ingredients:</strong> <br /> {ingredients[0]} <br /> {ingredients[1]} <br />{ingredients[2]} <br />{ingredients[3]} <br />{ingredients[4]} <br /></h2>

                    <button onClick={notify} className='btn btn-success'>Add To Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;