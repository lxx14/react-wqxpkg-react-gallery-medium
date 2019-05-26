import { getPhotos } from './service'; // импортируем сначала наш фетч

export const addImageActionType = (data) => ({type: 'ADD_IMAGE', data});

export const startFetchPhotosActionType = () => ({ type: 'START_FETCH_PHOTOS' });  //при начале загрузки фото например выводить значок загрузки или затемнять экран или еще что
export const stopFetchPhotosActionType = () => ({ type: 'STOP_FETCH_PHOTOS' });  //прекращать анимацию
export const failFetchPhotosActionType = () => ({ type: 'FAIL_FETCH_PHOTOS' });  //обработка фетча с ошибкой
export const successFetchPhotosActionType = (images) => ({ type: 'SUCCESS_FETCH_PHOTOS', images }); //при успехе - загружать фотки в редакс



export const fetchImagesAction = () => (dispatch) => { // объединяем экшны, которые нам надо делать асинхронно в один и в нем запускаем наши экшн тайпы, которые мы создали выше

  dispatch(startFetchPhotosActionType()) //перед загрузкой фоток вызываем анимацию загрузки

  /**
   * продолжаем цепочку then, начатую в service
   * В getPhotos мы можем указать какая страница и сколько фоток на странице выводить (эти параметры мы по умолчанию поставили в функции из service)
   */

  getPhotos(3, 25).then(images => {
    dispatch(successFetchPhotosActionType()) // запускаем диспатч, который обрабатывает прилетевшие фотки

    setTimeout(()=>{
      dispatch(stopFetchPhotosActionType()); // прекращаем анимацию загрузки после того, как выполнился успешный 
    }, 1000);


    console.log(images) //в редаксе смотрим как выполняются наши запросы
  })
};
