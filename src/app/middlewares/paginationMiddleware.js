const { DEFAULT_PAGE_INDEX, DEFAULT_LIMIT } = require('../../constants');

module.exports = function paginationMiddleware(req, res, next) {
  const { pageIndex, limit } = req.query;

  res.locals._pagination = {
    pageIndex: Number(pageIndex) || DEFAULT_PAGE_INDEX,
    limit: Number(limit) || DEFAULT_LIMIT,
    query: req.query,
  };

  next();
};
