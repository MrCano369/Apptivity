export default function useFetch() {
  const get = (url) => {
    return fetch(url, {
      headers: { "access-token": localStorage.getItem("Apptivity") },
    }).then((r) => r.json());
  };

  const post = (url, obj) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "access-token": localStorage.getItem("Apptivity"),
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((r) => r.json());
  };

  return { get, post };
  
}
