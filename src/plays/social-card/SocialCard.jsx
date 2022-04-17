import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

import CardForm from './CardForm';
import CardDetails from './CardDetails';

import { SocialContext } from './context/SocialContext';

import "./social-card.css";

function SocialCard() {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  // Your Code Start below.
  const [social, setSocial] = useState({});
  const value = { social, setSocial };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
          <SocialContext.Provider value={value}>
            <div className="social-card">
              <CardForm />
              <CardDetails />
            </div>
          </SocialContext.Provider>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SocialCard;