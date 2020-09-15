import React from 'react'
import { connect } from 'react-redux';
import contSelector from '../../redux/contact/constSelector'
import contAction from '../../redux/contact/contAction';
import style from './style.module.scss'
import SearchIcon from '@material-ui/icons/Search';

const Filter =({value, onChangeFindContact}) => {
 
        return (
            <div className={style.filter}>
                   <SearchIcon className={style.filter__search}/>
                    <label>
                        <input 
                            className={style.filter__input}
                            value={value} 
                            type="text" 
                            // placeholder="name" 
                            onChange={e => onChangeFindContact(e.target.value)} 
                            />
                    </label>
            </div>
        )
    };


const mapStateToProps = state => ({
    value:contSelector.getFilter(state),
})

const mapDispatchToProps = {
    onChangeFindContact:contAction.changeFilter
}


export default connect(mapStateToProps,mapDispatchToProps)(Filter);
   