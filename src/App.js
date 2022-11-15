import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogposts from './components/Blogposts';
import Blogpost from './components/Blogpost';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <BrowserRouter>
	<AuthProvider>
			<Header />
			<div className="container py-3">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/posts" element={<Blogposts />} />
					<Route path="/posts/:id" element={<Blogpost />} />
					<Route path="/posts/create" element={<Blogpost />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
			</AuthProvider>
		</BrowserRouter>
  );
}

export default App;
