const url = 'https://anteater-api.herokuapp.com/';

const handleHttpStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  }
  throw res;
};

const createErrorHandler = defaultValue => res => {
  console.error('request failed', res);
  return defaultValue;
};

export const postData = (data) => {
  return fetch(url, {
    credentials: 'same-origin',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleHttpStatus).catch(createErrorHandler({}));
}

export const getData = () => {
  return fetch(url, {
    credentials: 'same-origin',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(handleHttpStatus).catch(createErrorHandler([]));
}
