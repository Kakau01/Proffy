import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://scontent.fcgh19-1.fna.fbcdn.net/v/t1.0-1/p160x160/17553683_10203117556536882_1613741208345969026_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=gNlh5HS6wIwAX_WQeyp&_nc_ht=scontent.fcgh19-1.fna&_nc_tp=6&oh=e40fe0fbd99164527c51a82b03ddd5c7&oe=5F4E5AC2" alt="Claudia Leite" />
                        <div>Claudia Leite</div>
                        <span>Quimica</span>
                    </header>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Ducimus ad enim suscipit corporis blanditiis, quibusdam atque maiores. Quibusda.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>


                </article>
    );
}

export default TeacherItem;