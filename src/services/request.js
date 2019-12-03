const request = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then((res) => {
      if(!res.ok) {
        return res.json()
          .then(err => {
            throw err;
          })
          .catch(err => {
            console.log(err);
            if(RegExp(/(^E11000)/).test(err.message)) {
              throw 'Username already taken. Please choose another.';
            }
            else if(err.message === 'Invalid username or password') {
              throw err.message;
            }
            else {
              throw `Unable to fetch from ${url}`;
            }
          });
      }
      else {
        return res.json();
      }
    })
};

export const post = (url, body) => request(url, 'POST', body);
export const get = url => request(url, 'GET');
export const put = (url, body) => request(url, 'PUT', body);
export const patch = (url, body) => request(url, 'PATCH', body);
export const del = url => request(url, 'DELETE');
