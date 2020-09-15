import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './style.module.scss'
import './transition/opasityContaiber.css'


const Home = () => {
    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames="opasityContaiberTransition"
        unmountOnExit>
        <div className={style.home_box}> 
            <h2 className={style.home_box__title}> HOME </h2>
            <p className={style.home_box__text}>С другой стороны начало повседневной работы по формированию позиции позволяет оценить значение новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации модели развития. С другой стороны новая модель организационной деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.</p>
        </div>
        </CSSTransition>
    )
};


export default Home;
