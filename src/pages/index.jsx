import React from 'react';
import logo from './LogoSize_Pinterest_ByTailorBrands/logo_size_invert.jpg';

/*-----------[Fórmulas]---------*/
import NavBar from '../components/navbar/NavBar';
import BlocoDeCalculo from '../components/formulas/BlocoDeCálculo';
import Calculadora from '../components/calculadora/Calculadora';

/*-----------[Estilos]---------*/
import '../styles/Style_Footer/StyleFooter.css';
import '../styles/Style_Header/StyleHeader.css';
import '../styles/Style_Section/StyleSection.css';

export default function Body(){
    return(
        <>
            <header className='Header'>

                <img src={logo} alt="Logo" />
                <div>
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Contact</h3>
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
                        <li>Github</li>
                        <li>Whatsapp</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
                <div>
                    <h3>Ano de 2021</h3>
                </div>
                <div>
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Contact</h3>
                </div>
            </footer>
        </>
    )
}