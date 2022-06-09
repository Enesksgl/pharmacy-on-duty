import Home from './components/Home/HomePage'
import AdminPanel from './components/AdminPanel/AdminPanel'
import { LoginComponent } from './components/Login/LoginComponent'
export const routes = [
    {
        path: '/login',
        exact: true,
        component: LoginComponent,
    },
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/adminPanel',
        exact: true,
        component: AdminPanel,
    }
   
]