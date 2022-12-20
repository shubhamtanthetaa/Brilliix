export const PromoVideo = ({ play, videoUrl, onVideoPlay, image }) => {
  return (
    <>
      <img src={image} className='js-img' alt='' />
      <iframe
        autoPlay
        src={videoUrl}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
      ></iframe>
      {!play && (
        <div className='info-blocks__item-img-overlay'>
          <span></span>
          <div onClick={onVideoPlay} className='info-blocks__item-img-play'>
          </div>
        </div>
      )}
    </>
  );
};
