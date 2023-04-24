import {Routes, Route, useNavigate} from 'react-router-dom';
import About from './About'

export default function App() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/About');
  };

//   const navigateHome = () => {
//     // 👇️ navigate to /
//     navigate('/');
//   };

  return (
    <div>
      <div>
        <button onClick={navigateToContacts}>Home</button>
        <hr />
        {/* <button onClick={navigateToContacts}>Contacts</button> */}

        <Routes>
          <Route path="/About" element={<About />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </div>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Contacts() {
//   return <h2>Contacts</h2>