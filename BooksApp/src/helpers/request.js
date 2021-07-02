export const getRequest = async (url) => {
  const res = await fetch(url);
  return res;
};
export const postRequest = async (url, body) => {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const deleteRequest = async (url, body) => {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const putRequest = async (url, body) => {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
