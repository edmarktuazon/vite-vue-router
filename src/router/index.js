/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const history = createWebHistory(import.meta.env.BASE_URL);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	// {
	// 	path: "/hawaii",
	// 	name: "Hawaii",
	// 	component: () => import("../views/Hawaii.vue"),
	// },
	// {
	// 	path: "/brazil",
	// 	name: "Brazil",
	// 	component: () => import("../views/Brazil.vue"),
	// },
	// {
	// 	path: "/jamaica",
	// 	name: "Jamaica",
	// 	component: () => import("../views/Jamaica.vue"),
	// },
	// {
	// 	path: "/panama",
	// 	name: "Panama",
	// 	component: () => import("../views/Panama.vue"),
	// },
	{
		path: "/destination/:id/:slug",
		name: "destination.show",
		component: () => import("../views/DestinationShow.vue"),
	},
];

const router = createRouter({
	history,
	routes,
	linkActiveClass: "changed-link",
});
export default router;
