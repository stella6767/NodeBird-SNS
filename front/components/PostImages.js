
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

const PostImages = ({images}) => {

  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true); //이미지 클릭해서 확대할 수 있게끔.

  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        {/* 클릭기능은 있지만 굳이 클릭할 필요없는 이미지라는 걸 알려주는 role=presentation */}
        <img role="presentation" src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={`${images[1].src}`} alt={images[1].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }


  return (
    <>
      <div>
        <img role="presentation" style={{ width: '50%' }} src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        <div
          role="presentation"
          style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {/* {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />} */}
    </>
  );
}


  
  PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
  };
  
export default PostImages





