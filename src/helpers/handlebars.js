const dayjs = require('dayjs');
const Handlebars = require('handlebars');
const { DATE_FORMAT } = require('../constants');

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const icons = {
      default: 'bi bi-funnel-fill',
      asc: 'bi bi-sort-down-alt',
      desc: 'bi bi-sort-down',
    };
    const types = {
      default: 'desc',
      asc: 'desc',
      desc: 'asc',
    };

    const sortType = field === sort.column ? sort.type : 'default';
    const icon = icons[sortType];
    const newType = types[sortType];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${newType}`,
    );

    return new Handlebars.SafeString(`
      <a href='${href}'><i class="${icon}"></i></a>
    `);
  },
  dateFormater: (date) => {
    return dayjs(date).format(DATE_FORMAT);
  },
};
