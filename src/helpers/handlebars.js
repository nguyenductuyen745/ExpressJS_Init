const dayjs = require('dayjs');
const Handlebars = require('handlebars');
const { DATE_FORMAT } = require('../constants');

// Sum
const sum = (a, b) => a + b;

// DateFormater
const dateFormater = (date) => {
  return dayjs(date).format(DATE_FORMAT);
};

// Sortable
const sortable = (field, sort) => {
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
};

// Paginationable
const paginationable = (totalCount, { pageIndex, limit }) => {
  const pageIndexs = Array.from(
    { length: Math.ceil(totalCount / limit) },
    (_, i) => i + 1,
  );
  const prePageIndex = pageIndex - 1;
  const nextPageIndex = pageIndex + 1;
  const prePageDisabled = pageIndex <= 1;
  const nextPageDisabled = pageIndex >= pageIndexs.length;

  const pagesHtml = pageIndexs
    .map(
      (item) => `
      <li class="page-item ${item === pageIndex ? 'active' : ''}">
        <a class="page-link" href="?pageIndex=${item}">
          ${item}
        </a>
      </li>
    `,
    )
    .join('');

  return new Handlebars.SafeString(`
      <nav aria-label='Page navigation example'>
        <ul class='pagination'>
          <li class='page-item ${prePageDisabled ? 'disabled' : ''}'><a
            class='page-link'
            href='?pageIndex=${prePageIndex}'
          >Previous</a></li>
            
          ${pagesHtml}

          <li class='page-item'><a
            class='page-link ${nextPageDisabled ? 'disabled' : ''}'
            href='?pageIndex=${nextPageIndex}'
          >Next</a></li>
        </ul>
      </nav>
    `);
};

module.exports = {
  sum,
  dateFormater,
  sortable,
  paginationable,
};
