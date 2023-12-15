import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/HomePage'
  );
});

const ShopPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/shop-page'
  );
});

const ContactPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/contact-page'
  );
});

const AuthenticationPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/authentication-page/authentication-page'
  );
});

const CartPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/cart-page'
  );
});

const NavigationPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/NavigationPage'
  );
});

const NotFoundPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */

    /* webpackChunkname: "NotFound Page" */ 'pages/NotFoundPage'
  );
});

export const DefaultRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationPage />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='auth' element={<AuthenticationPage />} />
        <Route path='cart' element={<CartPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
// export const Routes: React.FC = () => {
//   return useRoutes([
//     {
//       path: '/',
//       element: <HomePage />
//     },
//     {
//       path: '/shop',
//       element: <Shop />
//     },
//     {
//       path: '*',
//       element: <NotFoundPage />
//     }
//   ]);
// };
