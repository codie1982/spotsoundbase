import React, {useState} from 'react';
import './App.css';
import '../src/styles/Styles.css'
function App() {
  const [email, setEmail] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    alert(`Thank you! We'll notify you at ${email} when the app is live.`);
    setEmail('');
    setFormVisible(false);
  };
  return (
    <div className="landing-page">
    <div className="header">
      <h1 className="title">SpotSound</h1>
      <h2 className="subtitle">Find the beat wherever you go</h2>
      <p className="description">
        Download your music list from your computer to your mobile device and enjoy listening to it
        whenever and wherever you want. Whether online or offline, music is always with you. Join
        the music world of other users, share their tastes and follow their lists. Moreover, you
        can leave your music where you listen to it and turn every point in the city into your own
        stage. Feel the rhythm in every step, share your music in every corner. With SpotSound,
        music is not only in your ears, but also in your steps! Now, everywhere is a concert area
        for you.
      </p>
    </div>
    <div >
      <i className='fas fa-search'></i>
    </div>
    <div className="actions">
      <button className="cta-button" onClick={() => setFormVisible(true)}>
        Follow Me!
      </button>
      {formVisible && (
        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    <div className="features">
      <div className="feature">
        <img src="upload_icon.png" alt="Upload Your Music Lists" />
        <p>Upload Your Music Lists</p>
      </div>
      <div className="feature">
        <img src="download_icon.png" alt="Download Your Mobile Phone" />
        <p>Download to Your Mobile Phone</p>
      </div>
      <div className="feature">
        <img src="location_icon.png" alt="Drop and Locate Your Music" />
        <p>Drop and Locate Your Music</p>
      </div>
    </div>
  </div>
  );
}

export default App;
