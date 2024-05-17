import { createRouter, createWebHistory } from "vue-router";

import Form from '../components/Form.vue';
import FormSelection from '../components/FormSelection.vue';
import ProfileSelection from '../components/ProfileSelection.vue';
import Result from '../components/Result.vue';
import Privacy from '../components/Privacy.vue';
import ChildSelection from '../components/ChildSelection.vue';

import AdminDashboard from '../components/AdminDashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ProfileSelection
        },

        {
            path: '/modules',
            component: FormSelection
        },

        {
            path: '/child/initiate',
            component: ChildSelection
        },

        {
            path: '/form/:id',
            component: Form,
            props: (route) => ({
                formId: route.params.id
            })
        },
        {
            path: '/form/result/:id',
            component: Result,
            props: (route) => ({
                formId: route.params.id
            })
        },
        {
            path: '/privacy',
            component: Privacy
        },
        {
            path: '/admin',
            component: AdminDashboard
        }
    ]
});

export default router;