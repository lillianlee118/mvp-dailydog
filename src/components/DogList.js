import React, {Component} from 'React';
import DogItem from './DogItem';

const DogList = (props) => {
  console.log(props.pics);
  const dogItems = props.pics.map(function (image, index) {
    return <DogItem key={index}
                    pic={image}
                    onPicSelect={props.onPicSelect} />
  });

  return (
    <div className='dog-list'>{dogItems}</div>
  )
}

export default DogList;
