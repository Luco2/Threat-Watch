// Mock database (replace with actual database)
const newsDatabase = [
    { id: 1, title: "First Article", content: "This is the first article." },
    { id: 2, title: "Second Article", content: "This is the second article." }
  ];
  
  // Get all news articles
  const getAllNews = () => {
    return newsDatabase;
  };
  
  // Get a single news article by ID
  const getNewsById = (id) => {
    return newsDatabase.find((news) => news.id === id);
  };
  
  // Create a new news article
  const createNews = (title, content) => {
    const id = newsDatabase.length + 1;
    const newArticle = { id, title, content };
    newsDatabase.push(newArticle);
    return newArticle;
  };
  
  // Update an existing news article
  const updateNews = (id, title, content) => {
    const article = newsDatabase.find((news) => news.id === id);
    if (article) {
      article.title = title;
      article.content = content;
      return article;
    } else {
      return null;
    }
  };
  
  // Delete a news article
  const deleteNews = (id) => {
    const index = newsDatabase.findIndex((news) => news.id === id);
    if (index !== -1) {
      newsDatabase.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };
  
  module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
  };  