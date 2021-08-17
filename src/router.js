import { createWebHistory, createRouter } from "vue-router";
import CounterButtonPage from './pages/CounterButtonPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import PeopleListPage from './pages/PeopleListPage';

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/counter-button', component: CounterButtonPage },
	{ path: '/people', component: PeopleListPage },
	{ path: '/form', component: FormPage },
];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;