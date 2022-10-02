import React from "react";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SearchResults from "./pages/SearchResults";
import Profile from "./pages/Profile";
import EditBlog from "./pages/EditBlog";
import CreateBlog from "./pages/CreateBlog";
import ViewBlog from "./pages/ViewBlog";
import ViewAuthor from "./pages/ViewAuthor";
import AuthorsList from "./pages/AuthorsList";
// Components
import SharedLayout from "./components/Others/SharedLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='search-results' element={<SearchResults />} />
          <Route path='profile' element={<Profile />} />
          <Route path='blogs/'>
            <Route path='edit-blog/:blogId' element={<EditBlog />} />
            <Route path='create-blog/:blogId' element={<CreateBlog />} />
            <Route path='view-blog/:blogId' element={<ViewBlog />} />
          </Route>
          <Route path='authors/'>
            <Route path='view-author/:authorId' element={<ViewAuthor />} />
            <Route path='authors-list' element={<AuthorsList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
