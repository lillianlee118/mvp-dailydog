import React, {Component} from 'React';

const DogItem = (image) => {
  return (
    <div className='dog-item'>
      <img src={image.pic} />
    </div>
  )
};

export default DogItem;
