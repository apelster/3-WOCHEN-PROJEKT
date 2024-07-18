import React, { useState } from 'react';

function GenerateLink() {
  const [link, setLink] = useState('');

  const generateLink = async () => {
    try {
      const response = await fetch('http://3.70.29.185:5000/GenerateLink');
      const data = await response.json();
      setLink(data.link);
    } catch (error) {
      console.error('Error generating link:', error);
    }
  };

  return (
    <div>
      <button id="generateLinkButton" onClick={generateLink}>Generate One-Time Link</button>
      {link && (
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
      )}
    </div>
  );
}

export default GenerateLink;
