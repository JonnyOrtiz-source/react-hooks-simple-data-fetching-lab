import React, { useState, useEffect } from 'react';

function App() {
   const APP_URL = 'https://dog.ceo/api/breeds/image/random';
   const [image, setImage] = useState(null);

   useEffect(() => {
      fetch(`${APP_URL}`)
         .then((r) => r.json())
         .then((data) => setImage(data.message));
   }, []);

   if (!image) {
      return <p>Loading...</p>;
   }
   return (
      <div>
         <img src={image} alt="A Random Dog" />
      </div>
   );
}

export default App;
