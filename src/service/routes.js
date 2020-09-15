import {lazy} from 'react'

export default [
{  
   path:'/',
   label:'Home',
   exact:true,
   component:lazy(()=> import('../View/Home')),
   private:false,
   restricted:false,
},
{  
    path:'/news',
    label:'NEWS',
    exact:true,
    component:lazy(()=> import('../View/News')),
    private:false,
    restricted:false,
 },
{   
    path:'/login',
    label:'Login',
    exact:true,
    component:lazy(()=> import('../View/Login')),
    private:false,
    restricted:true,
},
{   
    path:'/register',
    label:'Register',
    exact:true,
    component:lazy(()=> import('../View/Register')),
    private:false,
    restricted:true,
},
{  
    path:'/contacts',
    label:'Contacts',
    exact:true,
    component:lazy(() => import('../View/Contact')),
    private:true,
    restricted:false,
}  
];