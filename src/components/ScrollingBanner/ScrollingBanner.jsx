import React, { useState, useEffect } from 'react';
import './ScrollingBanner.scss';

import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

export default function ScrollingBanner() {
  const { t } = useTranslation();
  const infos = t('infos', { returnObjects: true });

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || infos.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % infos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, infos]);

  return (
    <div className="banner__container">
      <button className="pause__btn" onClick={() => setPaused(!paused)}>
        {paused ? (
          <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
        ) : (
          <FontAwesomeIcon icon={faPauseCircle} className="pause-icon" />
        )}
        <span key={paused ? 'continue' : 'pause'} className="btn-label fade">
          {paused ? t('continue') : t('pause')}
        </span>
      </button>

      <hr />

      <div className="banner__text__wrapper">
        <p key={index} className="banner__text">{infos[index]}</p>
      </div>
    </div>
  );
}
