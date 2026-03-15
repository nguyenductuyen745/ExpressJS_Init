const dayjs = require('dayjs');
const Handlebars = require('handlebars');
const { DATE_FORMAT, DEFAULT_PAGE_INDEX, LIMIT_LIST } = require('../constants');
const { mergeQuery } = require('../utils/mergeQuery');

// Equal
const eq = (a, b) => a === b;

// Sum
const sum = (a, b) => a + b;

// DateFormater
const dateFormater = (date) => {
  return dayjs(date).format(DATE_FORMAT);
};

// Sortable
const sortable = (field, { column, type, query }) => {
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

  const sortType = field === column ? type : 'default';
  const icon = icons[sortType];
  const newType = types[sortType];
  const sortQuery = {
    _sort: '',
    column: field,
    type: newType,
  };

  if (query.pageIndex) {
    Object.assign(sortQuery, {
      pageIndex: DEFAULT_PAGE_INDEX,
    });
  }

  const href = Handlebars.escapeExpression(mergeQuery(query, sortQuery));

  return new Handlebars.SafeString(`
      <a href='${href}'><i class="${icon}"></i></a>
    `);
};

// Paginationable
const paginationable = (totalCount, { pageIndex, limit, query }) => {
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
        <a class="page-link" href='${mergeQuery(query, { pageIndex: item })}' aria-label="Trang ${item}">
          ${item}
        </a>
      </li>
    `,
    )
    .join('');

  const optionSizeHtml = LIMIT_LIST.map(
    (item) =>
      `<option ${item.name === limit ? 'selected' : ''} value='${mergeQuery(query, { pageIndex: 1, limit: item.name })}'>${item.name}</option>`,
  );

  return new Handlebars.SafeString(`
      <nav class='d-flex justify-content-between align-items-center mt-4' aria-label="Điều hướng trang">
        <div class="d-flex align-items-center">
          <label for="limit-select" class="me-2 fw-bold text-muted">Hiển thị:</label>
          <select id="limit-select" name='limit' class="form-select form-select-sm" onChange="window.location.href=this.value" style="width: auto;">
            ${optionSizeHtml}
          </select>
        </div>
        <ul class='pagination mb-0'>
          <li class='page-item ${prePageDisabled ? 'disabled' : ''}'><a
            class='page-link'
            href='${prePageDisabled ? '#' : mergeQuery(query, { pageIndex: prePageIndex })}'
            aria-label="Trang trước"
          ><i class="fas fa-chevron-left"></i> Trước</a></li>
          ${pagesHtml}
          <li class='page-item ${nextPageDisabled ? 'disabled' : ''}'><a
            class='page-link'
            href='${nextPageDisabled ? '#' : mergeQuery(query, { pageIndex: nextPageIndex })}'
            aria-label="Trang sau"
          >Sau <i class="fas fa-chevron-right"></i></a></li>
        </ul>
      </nav>
    `);
};

module.exports = {
  eq,
  sum,
  dateFormater,
  sortable,
  paginationable,
};
