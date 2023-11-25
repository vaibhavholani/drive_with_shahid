import React, { useEffect } from 'react';
import './GoogleReviews.css';

export default function GoogleReviews() {

  useEffect(() => {
    // Function to remove <a> tags with a specific href
    const removeATags = () => {
      const container = document.querySelector('.remove-a');
      if (container) { // Make sure the container exists
        const aTags = container.querySelectorAll('a');
        aTags.forEach(aTag => {
          // Check if the href attribute matches the specified pattern
          if (aTag.href.startsWith('https://elfsight.com/')) {
            aTag.remove();
          }
        });
      }
    };

    // Set an interval to run the function every 2 seconds
    const intervalId = setInterval(removeATags, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={"bg-primary google-reviews"}>
    <div className="elfsight-app-95598708-c707-43a1-ad67-0e64c5dcb3d4 remove-a px-[2vw] py-[2vh]" data-elfsight-app-lazy></div>
    </div>
    
  )
}
