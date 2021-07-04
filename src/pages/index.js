import React from 'react';
import logo from './LogoSize_Pinterest_ByTailorBrands/logo_size_invert.jpg';

/*-----------[Fórmulas]---------*/
import NavBar from '../components/navbar/NavBar';
import BlocoDeCalculo from '../components/formulas/BlocoDeCálculo';
import MathQuadrado from '../components/formulas/MathQuadrado';
import MathTriangulo from '../components/formulas/MathTriângulo';
import Calculadora from '../components/calculadora/Calculadora';

/*-----------[Estilos]---------*/
import '../styles/Style_Footer/StyleFooter.css';
import '../styles/Style_Header/StyleHeader.css';
import '../styles/Style_Section/StyleSection.css';

/*-----------[Rotas]---------*/
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'

import AboutUs from './about-us/aboutUs'

export default function Body(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <header className='Header'>

                            <img src={logo} alt="Logo" />
                            <div>
                                <h3><Link to='/'>Home</Link></h3>
                                <h3><Link to="/AboutUs">About Us</Link></h3>
                                
                            </div>

                        </header>

                        <section className='Section'>


                        <NavBar/>

                        <div>

                            <BlocoDeCalculo/>

                            <Calculadora/>
                        </div>


                        </section>

                        <footer className='Footer'>

                        <div className='Contatos'>
                            <h3>Contato:</h3>
                            <ul>
                                <li><a href="https://github.com/Gabriel-tec" target="_blank" rel="noopener noreferrer"   >Github</a></li>
                                <li>Whatsapp</li>
                                <li>Linkedin</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ano de 2021</h3>
                        </div>
                        <div>
                            <h3><Link to='/'>Home</Link></h3>
                            <h3><Link to="/AboutUs">About Us</Link></h3>
                            
                        </div>
                        </footer>
                    </Route>
                    <Route path='/Quadrado'>
                    <header className='Header'>

                    <img src={logo} alt="Logo" />
                    <div>
                        <h3><Link to='/'>Home</Link></h3>
                        <h3><Link to="/AboutUs">About Us</Link></h3>
                    </div>

                    </header>

                    <section className='Section'>


                        <NavBar/>

                        <div>

                            <MathQuadrado/>

                            <Calculadora/>
                        </div>


                    </section>

                    <footer className='Footer'>

                        <div className='Contatos'>
                            <h3>Contato:</h3>
                            <ul>
                                <li><a target="_blank" href="https://github.com/Gabriel-tec" rel="noopener noreferrer">Github</a></li>
                                <li>Whatsapp</li>
                                <li>Linkedin</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ano de 2021</h3>
                        </div>
                        <div>
                            <h3><Link to='/'>Home</Link></h3>
                            <h3><Link to="/AboutUs">About Us</Link></h3>
                        </div>
                    </footer>
                        

                    </Route>
                    <Route path="/Triangulo">
                        <header className='Header'>

                            <img src={logo} alt="Logo" />
                            <div>
                                <h3><Link to='/'>Home</Link></h3>
                                <h3><Link to="/AboutUs">About Us</Link></h3>
                            </div>

                        </header>

                        <section className='Section'>


                            <NavBar/>

                        <div>

                        <MathTriangulo/>

                        <Calculadora/>
                        </div>


                        </section>

                        <footer className='Footer'>

                            <div className='Contatos'>
                                <h3>Contato:</h3>
                                <ul>
                                    <li><a target="_blank" href="https://github.com/Gabriel-tec" rel="noopener noreferrer">Github</a></li>
                                    <li>Whatsapp</li>
                                    <li>Linkedin</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Ano de 2021</h3>
                            </div>
                            <div>
                                <h3><Link to='/'>Home</Link></h3>
                                <h3><Link to="/AboutUs">About Us</Link></h3>
                            </div>
                        </footer>
                    </Route>
                    <Route path="/AboutUs">
                    <header className='Header'>

                        <img src={logo} alt="Logo" />
                        <div>
                            <h3><Link to='/'>Home</Link></h3>
                            <h3><Link to="/AboutUs">About Us</Link></h3>
                            
                        </div>

                        </header>

                        <AboutUs/>

                        <footer className='Footer'>

                        <div className='Contatos'>
                            <h3>Contato:</h3>
                        <ul>
                            <li><a href="https://github.com/Gabriel-tec" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li>Whatsapp</li>
                            <li>Linkedin</li>
                        </ul>
                            </div>
                            <div>
                                <h3>Ano de 2021</h3>
                            </div>
                            <div>
                                <h3><Link to='/'>Home</Link></h3>
                                <h3><Link to="/AboutUs">About Us</Link></h3>

                            </div>
                        </footer>    
                    </Route> 
                </Switch>
            </BrowserRouter>


        </>
    )
}