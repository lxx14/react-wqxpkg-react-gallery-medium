import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImageActionType, fetchImagesAction } from './actions';  //импортируем ВСЕ экшны, которые нам понадобятся в компоненте

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchImages(); // подгружаем фотки из мапДиспатчТуПропс
  }

  render() {
    const {photos, addImage} = this.props;
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
}

const mapStateToProps = (state) => ({
  photos: state.gallery.photos
})

const mapDispatchToProps = {
  addImage: addImageActionType,
  fetchImages: fetchImagesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);