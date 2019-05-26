const client_id = `ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c`; //ключ клиента
const base_url = `https://api.unsplash.com/`; //неизменная часть адреса, у которого спрашиваем

export const getPhotos = (page=2, per_page=20) => { 

  // per_page  в данном случае-количество элементов (все это в документации можно посмотреть). Передаем в параметры функции
  // page   какая страница с фотками(тоже из документации)

  const url = `${base_url}photos/?client_id=${client_id}&per_page=${per_page}&page=${page}`; // все дополнительные параметры указываем через &. в данном случае кроме обычных фоток мы указываем - по 20 фоток на страницы, фотки со второй страницы

  return fetch(url).then(responce=>responce.json())
}