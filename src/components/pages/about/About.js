import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch("https://wp1.internetskimarketing.eu/wp-json/wp/v2/pages/80")
      .then(response => response.json())
      .then(data => setPageData(data))
  }, []);

  if (!pageData) {
    return <p>Učitavanje...</p>
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
  );
};

export default AboutUs;
