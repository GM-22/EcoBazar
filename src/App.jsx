
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SignUpPage from './Pages/SignUpPage';
import ShopPages from './Pages/ShopPages';
import BlogPage from './Pages/Blogpage';
import ContactUs from './Pages/ContactUs';
import Pages from './Pages/Pages';
import NotFounded404 from './Pages/NotFounded404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "shop", element: <ShopPages /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactUs /> },
      { path: "pages", element: <Pages /> },
      { path: "not-found", element: <NotFounded404 /> },


    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App