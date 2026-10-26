import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './index.scss';

function PreHeader() {
  const mobile = process.env.REACT_APP_CONTACT_MOBILE;
  const address = process.env.REACT_APP_CONTACT_ADDRESS;
  const email = process.env.REACT_APP_CONTACT_EMAIL;
  const phoneLink = mobile.replace(/[^\d+]/g, '');

  return (
    <div className="preheader">
      <div className="preheader-container">
        <a className="preheader-item" href={`tel:${phoneLink}`}>
          <FaPhoneAlt aria-hidden="true" />
          <span>{mobile}</span>
        </a>
        <div className="preheader-item">
          <FaMapMarkerAlt aria-hidden="true" />
          <span>{address}</span>
        </div>
        <a className="preheader-item" href={`mailto:${email}`}>
          <FaEnvelope aria-hidden="true" />
          <span>{email}</span>
        </a>
      </div>
    </div>
  );
}

export default PreHeader;
