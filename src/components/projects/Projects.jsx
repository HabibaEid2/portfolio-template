import { Tab, Tabs } from 'react-bootstrap';
import e_commerce_img from './../../imgs/e-commerce-image.png' ; 
import foodera_img from './../../imgs/foodera-image.png' ; 
import project1_img from './../../imgs/project1-1-img.png' ; 
import restaurant_img from './../../imgs/restaurant-image.png' ; 
import register_img from './../../imgs/register-image.png' ; 
import new_product_img from './../../imgs/new-product-image.png' ; 
import './projects.css'
export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="container">
            <div className="heading">Projects</div>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, iure tenetur. Amet deleniti provident adipisci blanditiis quae, maiores aspernatur doloribus? Exercitationem illo eveniet quaerat atque deserunt qui culpa voluptatum! Voluptate?
            </p>
            <Tabs
                    defaultActiveKey="one"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    variant='bills'
                    >
                    <Tab eventKey="one" title="Tab 1" className='active'>
                        <div className="projects-content row">
                    
                            <div className="project col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                <div className="image">
                                    <img src={e_commerce_img} alt="e-commerce"/>
                                </div>
                                <div className="project-content">
                                    <h2>E-commerce</h2>
                                    <div className="links">
                                    <button className="btn btn-dark">
                                        <a href="https://habibaeid2.github.io/E-commerce"  className="demo">Demo</a>
                                    </button>
                                    <button className="btn btn-dark">
                                        <a href="https://github.com/HabibaEid2/E-commerce" target = "_blank" className="gitHub">gitHub</a>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="project col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                <div className="image">
                                    <img src={foodera_img} alt="foodera"/>
                                </div>
                                <div className="project-content">
                                    <h2>Foodera</h2>
                                    <div className="links">
                                    <button className="btn btn-dark">
                                        <a href="https://habibaeid2.github.io/Foodera"  className="demo">Demo</a>
                                    </button>
                                    <button className="btn btn-dark">
                                        <a href="https://github.com/HabibaEid2/Foodera" target = "_blank" className="gitHub">gitHub</a>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="project col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                <div className="image">
                                    <img src={restaurant_img} alt=""/>
                                </div>
                                <div className="project-content">
                                    <h2>Restaurant</h2>
                                    <div className="links">
                                    <button className="btn btn-dark">
                                        <a href="https://habibaeid2.github.io/Restaurant"  className="demo">Demo</a>
                                    </button>
                                    <button className="btn btn-dark">
                                        <a href="https://github.com/HabibaEid2/Restaurant" target = "_blank" className="gitHub">gitHub</a>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="project col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                <div className="image">
                                    <img src={project1_img} alt=""/>
                                </div>
                                <div className="project-content">
                                    <h2>Car Store</h2>
                                    <div className="links">
                                    <button className="btn btn-dark">
                                        <a href="https://habibaeid2.github.io/car-store" className="demo">Demo</a>
                                    </button>
                                    <button className="btn btn-dark">
                                        <a href="https://github.com/HabibaEid2/car-store"  className="gitHub">gitHub</a>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className="project col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                <div className="image">
                                    <img src={register_img} alt=""/>
                                </div>
                                <div className="project-content">
                                    <h2>Register</h2>
                                    <div className="links">
                                    <button className="btn btn-dark">
                                        <a href="https://habibaeid2.github.io/Register-page" className="demo">Demo</a>
                                    </button>
                                    <button className="btn btn-dark">
                                        <a href="https://github.com/HabibaEid2/Register-page"  className="gitHub">gitHub</a>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className="project col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                <div className="image">
                                    <img src={new_product_img} alt=""/>
                                </div>
                                <div className="project-content">
                                    <h2>New Product</h2>
                                    <div className="links">
                                    <button className="btn btn-dark">
                                        <a href="https://habibaeid2.github.io/create-new-product" className="demo">Demo</a>
                                    </button>
                                    <button className="btn btn-dark">
                                        <a href="https://github.com/HabibaEid2/create-new-product"  className="gitHub">gitHub</a>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="two" title="Tab 2" >
                        this section will complete soon!
                    </Tab>
                    <Tab eventKey="Three" title="Tab 3">
                        this section will complete soon!
                    </Tab>
                </Tabs>
            
            </div>
        </div>
    )
}