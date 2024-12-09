// src/components/ResultCard.js
import React from 'react';
import '../styles/ResultCard.scss';

const ResultCard = ({ title, category }) => {
  return (
    <div className="result-card">
      <h3>{title}</h3>
      <p>{category}</p>
    </div>
  );
};

export default ResultCard;
