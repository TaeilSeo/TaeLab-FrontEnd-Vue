import { apiInstance } from "./index.js";

const api = apiInstance();

function selectCategory(success, fail) {
  api.get(`/news/category`).then(success).catch(fail);
}

function selectArticle(params, success, fail) {
  api.get(`/news`, { params: params }).then(success).catch(fail);
}

function selectArticleDist(success, fail) {
  api.get(`/news/distribution`).then(success).catch(fail);
}

function insertArticle(params, success, fail, last) {
  const article = JSON.stringify(params);
  console.log("article: ", article);
  api.post(`/news`, article).then(success).catch(fail).finally(last);
  // console.log("insertArticle params: ", params);
  // api.post(`/news`, { params: params }).then(success).catch(fail);
}

export { selectCategory, selectArticle, selectArticleDist, insertArticle };
