import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__image" />
      <div className="skeleton-card__content">
        <div className="skeleton-card__title" />
        <div className="skeleton-card__divider" />
        <div className="skeleton-card__description">
          <div className="skeleton-card__line" />
          <div className="skeleton-card__line skeleton-card__line--short" />
        </div>
        <div className="skeleton-card__meta">
          <div className="skeleton-card__tag" />
          <div className="skeleton-card__tag" />
          <div className="skeleton-card__tag" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
