module.exports = async function (fastify, opts) {

    // Fetch latest news
    fastify.get('/news/latest', async (req, reply) => {
      // call newsController function to fetch the latest news
      // const news = await newsController.getLatestNews();
      const news = [
        { id: 1, title: 'Latest News 1', content: 'Content 1' },
        { id: 2, title: 'Latest News 2', content: 'Content 2' }
      ];
      reply.send(news);
    });
  
    // Fetch news by ID
    fastify.get('/news/:id', async (req, reply) => {
      const newsId = req.params.id;
      // Here you can call your newsController function to fetch news by ID
      // const news = await newsController.getNewsById(newsId);
      const news = { id: newsId, title: 'Sample News', content: 'Sample Content' };
      reply.send(news);
    });
  
    // Save news article to user's saved articles
    fastify.post('/news/:id/save', async (req, reply) => {
      const newsId = req.params.id;
      // Here you can call your newsController function to save the article
      // await newsController.saveArticle(newsId);
      reply.send({ message: `Article ${newsId} has been saved.` });
    });
  
    // Remove article older than 5 days (this can also be handled by a cron job separately)
    fastify.delete('/news/:id', async (req, reply) => {
      const newsId = req.params.id;
      // Here you can call your newsController function to delete the article
      // await newsController.deleteArticle(newsId);
      reply.send({ message: `Article ${newsId} has been deleted.` });
    });
  
  };  