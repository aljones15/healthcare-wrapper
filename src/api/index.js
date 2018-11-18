import forge from 'mappersmith';

const spanishURI = 'https://www.cuidadodesalud.gov';
const englishURI = 'https://www.healthcare.gov';

function client(uri) {
  return forge({
    host: uri,
    resources: {
      Content: {
        Articles: {path: '/api/articles.json'},
        Blog: {path: '/api/blog.json'},
        Questions: {path: '/api/questions.json'},
        Glossary: {path: '/api/glossary.json'},
        States: {path: '/api/states.json'},
        Topics: {path: '/api/topics.json'},
        Page: {path: '{uri}', params: {uri: '/index.json'}}
      }
    }
  });
}

const clients = {
  english: client(englishURI),
  spanish: client(spanishURI),
  getPage(uri) {
    const spanishURL = /^\/es\//i;
    if(spanishURL.test(uri)) return clients.spanish.Content.Page({uri});
    return clients.english.Content.Page({uri});
  }
};

export default clients;
