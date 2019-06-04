import { getPhotos } from './service'; // импортируем сначала наш фетч

export const FETCH_PHOTOS_START = "FETCH_PHOTOS_START";
export const FETCH_PHOTOS_STOP = "FETCH_PHOTOS_STOP";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAIL = "FETCH_PHOTOS_FAIL";

export const addImageActionType = (data) => ({ type: 'ADD_IMAGE', data });

export const FetchPhotosStartActionType = () => ({ type: FETCH_PHOTOS_START });  //при начале загрузки фото например выводить значок загрузки или затемнять экран или еще что
export const FetchPhotosSuccessActionType = (photos) => ({ type: FETCH_PHOTOS_SUCCESS, photos }); //при успехе - загружать фотки в редакс
export const FetchPhotosStopActionType = () => ({ type: FETCH_PHOTOS_STOP }); //КОНЕЦ ЗАГРУЗКИ
export const FetchPhotosFailActionType = () => ({ type: FETCH_PHOTOS_FAIL });  //обработка фетча с ошибкой



export const fetchPhotosAction = () => (dispatch) => { // объединяем экшны, которые нам надо делать асинхронно в один и в нем запускаем наши экшн тайпы, которые мы создали выше

  dispatch(FetchPhotosStartActionType()) //перед загрузкой фоток вызываем анимацию загрузки

  /**
   * продолжаем цепочку then, начатую в service
   * В getPhotos мы можем указать какая страница и сколько фоток на странице выводить (эти параметры мы по умолчанию поставили в функции из service)
   */

  getPhotos(3, 25)
    .then(photos => {
      dispatch(FetchPhotosSuccessActionType(photos)); // запускаем диспатч, который обрабатывает прилетевшие фотки
      setTimeout(()=>{dispatch(FetchPhotosStopActionType())}, 1000)
    })
    .catch(()=>{dispatch(FetchPhotosFailActionType())})
};
