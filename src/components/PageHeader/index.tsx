import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
//criando as propriedades 
interface PageHeaderProps {
    title: string;
    //?diz que a propriedade não é obrigatoria, massim opcional
    //permite que na teacher list eu nao envie essa propriedade, mas na teacher form sim
    description?: string;

}
//tenho um componente chamado page header, é um function component la do react e as propriedade que eles podem receber sao essas
const PageHeader: React.FC<PageHeaderProps> = (props) => {

    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                

                {/* Mostrar a decription caso ela exista */}
                {/* Forma caso tenha um else de se fazer no JSX */}
                {/* {props.description ? <p>{props.description}</p> : null} */}
                {/* ******Forma de condicionais quando nao existe o else***** */}
                {/* A segunda parte da operacao so sera executada se a condicao antes do AND for verdadeira, ou sej se a gente tiver uma descricao */}
                {props.description && <p>{props.description}</p>}

                {props.children}

            </div>

        </header>
    );
}

export default PageHeader;