import { createReactRouter, createRouteConfig, Outlet, RouterProvider } from "@tanstack/react-router";
import { lazy } from "react";
import NotFound from "./pages/notFound";

const rootRoute = createRouteConfig({
	component: () => <Outlet/>,
})

const homeRoute = rootRoute.createRoute({
  path: '/',
  component: lazy(() => import('./pages/home')),
})

const aboutRoute = rootRoute.createRoute({
  path: '/about',
  component: lazy(() => import('./pages/about')),
})

const notFoundRoute = rootRoute.createRoute({
	path: '*',
	component: NotFound
})


const routeConfig = rootRoute.addChildren([homeRoute, aboutRoute, notFoundRoute])

export const router = createReactRouter({ routeConfig })

export default () => <RouterProvider router={router} /> 