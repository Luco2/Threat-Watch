const newsServices = require('./newsServices');

// Get all news articles
const getAllNews = async (request, reply) => {
  const news = newsServices.getAllNews();
  reply.send(news);
};

// Get a single news article by ID
const getNewsById = async (request, reply) => {
  const id = Number(request.params.id);
  const news = newsServices.getNewsById(id);
  
  if (news) {
    reply.send(news);
  } else {
    reply.status(404).send({ error: 'News article not found' });
  }
};

// Create a new news article
const createNews = async (request, reply) => {
  const { title, content } = request.body;
  const newArticle = newsServices.createNews(title, content);
  reply.status(201).send(newArticle);
};

// Update an existing news article
const updateNews = async (request, reply) => {
  const id = Number(request.params.id);
  const { title, content } = request.body;
  
  const updatedArticle = newsServices.updateNews(id, title, content);
  
  if (updatedArticle) {
    reply.send(updatedArticle);
  } else {
    reply.status(404).send({ error: 'News article not found' });
  }
};

// Delete a news article
const deleteNews = async (request, reply) => {
  const id = Number(request.params.id);
  const deleted = newsServices.deleteNews(id);
  
  if (deleted) {
    reply.status(204).send();
  } else {
    reply.status(404).send({ error: 'News article not found' });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};