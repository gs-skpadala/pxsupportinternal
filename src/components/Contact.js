import React, { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact Page'; // Set the page title
  }, []);

  return(
      <div>
        <h1>Contact Us</h1>
        <button>Contact Button 1</button>
        <button>Contact Button 2</button>
        <button>Contact Button 3</button>
        <button>Contact Button 4</button> 
        <button>Contact Button 5 added</button> 
      </div>
  );
};

export default Contact;