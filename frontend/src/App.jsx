import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //URL
      const response = await axios.post('http://localhost:5000/submit', formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error details:", error);
      alert("SORRY ! Can't Conncect to the server. Please try again Later.");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h2>Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="NAME :" onChange={handleChange} required style={{padding: '10px'}} /><br/><br/>
        <input name="email" type="email" placeholder="E-MAIL :" onChange={handleChange} required style={{padding: '10px'}} /><br/><br/>
        <button type="submit" style={{padding: '10px 20px', cursor: 'pointer'}}>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;