import { getPhotos } from './service';

export const addImageActionType = (data) => ({type: 'ADD_IMAGE', data});

export const startFetchPhotosActionType = (data) => ({ type: 'START_FETCH_PHOTOS' });  //при начале загрузки фото например выводить значок загрузки или затемнять экран или еще что
export const successFetchPhotosActionType = (data) => ({ type: 'START_FETCH_PHOTOS', images }); //при успехе - загружать фотки в редакс
export const failFetchPhotosActionType = (data) => ({ type: 'FAIL_FETCH_PHOTOS' });  //обработка фетча с ошибкой



export const fetchImagesAction = (dispatch) => {

  /**
   * продолжаем цепочку then, начатую в service
   * В getPhotos мы можем указать какая страница и сколько фоток на странице выводить (эти параметры мы по умолчанию поставили в функции из service)
   */

  getPhotos(3, 25).then(images => console.log(images))
};
