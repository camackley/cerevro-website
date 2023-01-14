import Axios from "axios";

function NetWorkHelper() {
  const SERVICE_URL =
    "https://us-central1-cerevro-cf50f.cloudfunctions.net/api/";

  /* const SERVICE_URL =
    "https://us-central1-cerevro-cf50f.cloudfunctions.net/dev/"; */

  var obj = {};

  obj.httpGet = async (path) => {
    return new Promise((resolve, reject) => {
      Axios.get(SERVICE_URL + path)
        .then((response) => {
          if (response.data["error"] !== "") {
            return reject(new Error(response.data["error"]));
          }
          return resolve(response.data["body"]);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  obj.httpPots = async (path, data) => {
    return new Promise((resolve, reject) => {
      Axios.post(SERVICE_URL + path, data)
        .then((response) => {
          if (response.data["error"] !== "") {
            return reject(new Error(response.data["error"]));
          }
          return resolve(response.data["body"]);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  obj.fetchData = async (path) => {
    return new Promise((resolve, reject) => {
      Axios.get(SERVICE_URL + path)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  return obj;
}

export default NetWorkHelper;
