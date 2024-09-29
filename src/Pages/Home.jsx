import React, { useState } from 'react';
import '../Style/Home.css';

function Home() {
  const [profile, setProfile] = useState('Individual');
  const [classify, setClassify] = useState('Sign');
  const [years, setYears] = useState(1);
  const [token, setToken] = useState('USB Token');
  const [assistance, setAssistance] = useState('No Assistance');

  const basePrices  = {
    'Individual': { "Sign": 100 , "Encrypt" : 200 , "Sign & Encrypt" : 300 },
    'Organization': { "Sign": 100 , "Encrypt" : 200 , "Sign & Encrypt" : 300 },
    'IET': { "Sign": 100 , "Encrypt" : 200 , "Sign & Encrypt" : 300 }
  };

  const yearMultipliers = {
    1: 1,
    2: 2,  
    3: 3,  
  };

  const usbTokenPrice = 423.72;
  const gstRate = 0.18;
  const assistancePrice = 338.98;

  const basePrice = basePrices[profile][classify] * yearMultipliers[years];
  const tokenPrice = token === 'USB Token' ? usbTokenPrice : 0;
  const assistanceAmount = assistance === 'Need Assistance' ? assistancePrice : 0;

  const gst = (basePrice + tokenPrice + assistanceAmount) * gstRate;
  const totalPrice = basePrice + tokenPrice + assistanceAmount + gst;

  return (
    <div className="container">
      <h1>Digital Certificate Purchase</h1>
      
      <div className="section">
        <button onClick={() => setProfile('Individual')} className={profile === 'Individual' ? 'active' : ''}>Individual</button>
        <button onClick={() => setProfile('Organization')} className={profile === 'Organization' ? 'active' : ''}>Organization</button>
        <button onClick={() => setProfile('IET')} className={profile === 'IET' ? 'active' : ''}>IET (DGFT)</button>
      </div>
      
      <div className="section">
        <h3>Classify</h3>
        <button onClick={() => setClassify('Sign')} className={classify === 'Sign' ? 'active' : ''}>Sign</button>
        <button onClick={() => setClassify('Encrypt')} className={classify === 'Encrypt' ? 'active' : ''}>Encrypt</button>
        <button onClick={() => setClassify('Sign & Encrypt')} className={classify === 'Sign & Encrypt' ? 'active' : ''}>Sign & Encrypt</button>
      </div>
      
      <div className="section">
        <h3>Years</h3>
        <button onClick={() => setYears(1)} className={years === 1 ? 'active' : ''}>1 Year</button>
        <button onClick={() => setYears(2)} className={years === 2 ? 'active' : ''}>2 Years</button>
        <button onClick={() => setYears(3)} className={years === 3 ? 'active' : ''}>3 Years</button>
      </div>
      
      <div className="section">
        <h3>Token</h3>
        <button onClick={() => setToken('USB Token')} className={token === 'USB Token' ? 'active' : ''}>USB Token</button>
        <button onClick={() => setToken('No USB Token')} className={token === 'No USB Token' ? 'active' : ''}>No USB Token</button>
      </div>
      
      <div className="section">
        <h3>Assistance Services</h3>
        <button onClick={() => setAssistance('Need Assistance')} className={assistance === 'Need Assistance' ? 'active' : ''}>Need Assistance</button>
        <button onClick={() => setAssistance('No Assistance')} className={assistance === 'No Assistance' ? 'active' : ''}>Assistance Not Required</button>
      </div>
      
      <div className="summary">
        <h3>Payment Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>DSC Amount:</td>
              <td>₹{basePrice.toFixed(2)}</td>
            </tr>
            {token === 'USB Token' && (
              <tr>
                <td>USB Token:</td>
                <td>₹{tokenPrice.toFixed(2)}</td>
              </tr>
            )}
            {assistance === 'Need Assistance' && (
              <tr>
                <td>Assistance Services:</td>
                <td>₹{assistanceAmount.toFixed(2)}</td>
              </tr>
            )}
            <tr>
              <td>GST (18%):</td>
              <td>₹{gst.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total Amount:- </td>
              <td> ₹{totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Certificate</button>
      </div>
    </div>
  );
}

export default Home;
