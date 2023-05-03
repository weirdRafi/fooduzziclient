import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Details = () => {
    const [chefRecipe, setChefRecipe] = useState([])

    // console.log(chefRecipe);
    const data = useLoaderData()

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-weirdrafi.vercel.app/allRecipes')
            .then(res => res.json())
            .then(data => setChefRecipe(data))
    }, [])
  const { id, name, picture, description, experience, recipes, likes } = data.item;
    // console.log(id);
    return (
        <>
            <div className="card mx-auto  w-7/12 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body text-start">
                    <h2 className="card-title">{name}</h2>
                    <h2>Experience: {experience} year's</h2>
                    <h2>Likes: {likes} </h2>
                    <h2>Number of Recipes: {recipes}</h2>
                    <h2>{description}</h2>

                    <Link to="/" className='btn btn-success'>Back</Link>
                </div>
            </div>

            <div className='lg:flex'>
                {
                    chefRecipe.map(r => <Recipe r={r}></Recipe>)
                }
            </div>


        </>

    );
};

export default Details;