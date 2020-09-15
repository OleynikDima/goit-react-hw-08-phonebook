import React from 'react';
import { connect } from 'react-redux';
import constSelector from '../../redux/contact/constSelector';
import contOperation from '../../redux/contact/contOperation'
import style from './style.module.scss'
import foto from '../../images/pngegg.png'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import popTransition from './tramsition/pop.module.scss'

const List = ({contacts,onDelete}) => {
    return (
        // <ul className={style.list}>
        <TransitionGroup component="ul" className={style.list}>
        {  contacts.map(contact =>  {
            return (
                <CSSTransition
                key={contact.id}
                in={true}
                timeout={500}
                classNames={popTransition}
                unmountOnExit>
                 <li  className={style.list__item} key={contact.id}>
                         <img  alt='avatar user'src={foto} width='30' height='30'/>
                         <div className={style.list__contact}>
                            <span className={style.list__name}> {contact.name} </span>
                            <span>{contact.number} </span>
                         </div>
                 <button className={style.list__btn} onClick={()=>onDelete(contact.id)} type="submit"> <DeleteForeverIcon /></button>
                 </li>
                 </CSSTransition>
            )})
            } 
            </TransitionGroup>
        // </ul>
    )
}
const mapStatetoProps = (state)=> ({
    contacts:constSelector.getVisibleContacts(state)

})

const mapDispatchToProps = {
    onDelete:contOperation.removeItem
}

export default connect(mapStatetoProps,mapDispatchToProps)(List) 

