module.exports = function paginationMiddleware(req, res, next) {
  const { pageIndex, limit } = req.query;

  res.locals._pagination = {
    pageIndex: Number(pageIndex) || 1,
    limit: Number(limit) || 5,
  };

  next();
};
