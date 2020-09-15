import {createSelector} from '@reduxjs/toolkit';



const getContactsItems = state => state.contacts.items;

const getContacts = state => state.contacts; 


const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
    [getContactsItems,getFilter],
    (items,filter)=>{
        return items.filter(contack => contack.name.toLowerCase().includes(filter))
});

export default {
    getContactsItems,
    getContacts,
    getVisibleContacts,
    getFilter
}