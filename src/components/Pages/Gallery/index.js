import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addImageActionType, fetchPhotosAction } from './actions';  //импортируем ВСЕ экшны, которые нам понадобятся в компоненте

function Gallery(props) {

    const { photos, addImage, fetchPhotos } = props;

  useEffect(() => {  //хук, в массив-пропсы, при изменении которых надо перерендер хука. если пустой - то один раз сработает как и КомпонентДидМоунт
    fetchPhotos(); // подгружаем фотки из мапДиспатчТуПропс
  }, [fetchPhotos])





  const list = photos.map(item => <li key={item.id}>{item.name}</li>);

  const add = () => {
    const id = photos[photos.length - 1]['id'] + 1;
    const image = { id, name: `image-${id}` };
    addImage(image);
  }

  return (
    <div id="gallery" className='page'>
      <h1>Gallery</h1>
      <ul>
        {list}
      </ul>
      <input type='button' onClick={add} value='addImage' />
    </div>
  )
}

const mapStateToProps = (state) => ({
  photos: state.gallery.photos
})

const mapDispatchToProps = {
  addImage: addImageActionType,
  fetchPhotos: fetchPhotosAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);