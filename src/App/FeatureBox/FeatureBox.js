import React from "react";

export default function FeatureBox({ feature, description, thumb }) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <figure className='image is-128x128'>
            <img src={thumb} alt='thumbnail' />
          </figure>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>{feature}</strong>
              <br />
              {description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
