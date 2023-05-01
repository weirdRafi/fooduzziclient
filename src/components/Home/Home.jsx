import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefdata from '../Chefdata/Chefdata';

const Home = () => {
    const datas = useLoaderData()

    return (
        <div>
            <section>
                <div className='lg:flex mt-10 items-center'>
                    <div><img src="https://i.ibb.co/XLYQcpD/chef-with-thumb-up-white-background.jpg" alt="chef-with-thumb-up-white-background" border="0" /></div>
                    <div className='text-start'>
                        <h3 className='text-green-400 text-4xl font-bold'>The Master</h3> <br />
                        <h4 className='text-3xl'>Of Kitchen</h4>
                        <p className='text-gray-500 mt-5'>To become a MasterChef requires dedication, hard work, and a passion for cooking. Here are some steps you can take to improve your skills in the kitchen and work towards becoming a master chef:</p>
                    </div>
                </div>
            </section> {/* <!-- banner End --> */}

            <section className='mt-10'>
                <h2 className='text-green-400 text-3xl'>Chef section</h2>
                <div className='lg:flex flex-wrap gap-2'>

                    {
                        datas.map(data => <Chefdata key={data.id} data={data}></Chefdata>)
                    }
                </div>
            </section> {/* <!-- Chef section end --> */}

            <section className='mt-10 mb-10 shadow-xl'>
                <h2 className='text-green-400 text-3xl'>Carousel Section</h2>

                <div className="carousel h-96 w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="banner.avif" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="banner2.avif" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="banner3.avif" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="banner4.avif" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </section> {/* <!-- Carousel section end --> */}

            <section>
                
            </section>
        </div>
    );
};

export default Home;