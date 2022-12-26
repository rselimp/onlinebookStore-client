import React from 'react';
import image from '../../images/picture34.png';

const OfferBook = () => {
    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-gray-600">
  <div className="hero-content flex-col lg:flex-row dark:text-white">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">$100 Offers By Jhankar Mahbub | Book Summary</h1>
      <p className="py-6">Team Shows you how to make profitable offers by “reliably turning advertising dollars into (enormous) profits using a combination of pricing, value, guarantees, and naming strategies.” Combining these factors in the right amounts will result in a Grand Slam Offer. “The good news is that in business, you only need to hit one Grand Slam Offer to retire forever.</p>
      <button className="btn btn-accent dark:text-white">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default OfferBook;
