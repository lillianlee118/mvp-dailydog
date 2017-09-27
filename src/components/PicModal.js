import React from 'react';
import Modal from 'react-modal';

const PicModal = (props) => {

  if (!props.selectedPic) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className='pic-modal'>
        <img src={ props.selectedPic } />
        <br/>
        <br/>
        <br/>

        <button className='button' onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default PicModal;
