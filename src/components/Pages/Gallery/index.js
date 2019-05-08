import React from 'react';
import { connect } from 'react-redux';
import { addImageAction } from './actions';

const Gallery = (props) => {
  const list = props.photos.map(item=><li key={item.id}>{item.name}</li>);

  const add = () => {
    const id = props.photos[props.photos.length-1]['id']+1;
    const image = { id, name: `image-${id}` };
    props.addImage(image);
  }

  return(
    <div id="gallery" className='page'>
      <h1>Gallery</h1>
      <ul>
      {list}
      </ul>
      <input type='button' onClick={add} value='addImage'/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  photos: state.gallery.photos
})

const mapDispatchToProps = (dispatch) => ({
    addImage: (data) => dispatch(addImageAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);