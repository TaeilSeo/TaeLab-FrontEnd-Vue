import { apiInstance } from "./index.js";

const api = apiInstance();

function selectCategory(success, fail) {
  api.get(`/news/category`).then(success).catch(fail);
}

function selectArticle(params, success, fail) {
  api.get(`/news`, { params: params }).then(success).catch(fail);
}

function insertArticle(params, success, fail) {
  const article = JSON.stringify(params);
  console.log("article: ", article);
  api.post(`/news`, article).then(success).catch(fail);
  // console.log("insertArticle params: ", params);
  // api.post(`/news`, { params: params }).then(success).catch(fail);
}

export { selectCategory, insertArticle, selectArticle };
