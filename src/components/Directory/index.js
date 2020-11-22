import React from 'react';
import ShopMen from '../../images/herbs/oregano-mediem.jpg';
import ShopWomen from '../../images/bg/devon-janse.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <a>
            Houseplants
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          <a>
            Herbs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
