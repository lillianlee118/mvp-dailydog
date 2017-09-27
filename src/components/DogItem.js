import React, {Component} from 'React';

const DogItem = ({pic, onPicSelect}) => {
  return (
    <div className='dog-item' onClick={() => onPicSelect(pic)}>
      <img src={pic} />
    </div>
  )
};

export default DogItem;
