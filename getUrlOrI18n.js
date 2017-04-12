/**
 * "A Function that Returns an URL or I18nized Label"
 */

const i18n = {};
i18n.i = function i() {
  return 'REPORT LABEL OTHERS';
};

function getI18nizedList(model) {
  /** This is not good.
   * let name;
   * if (model.refersite) {
   * name = model.refersite === 'report.label.others' ?
   *  i18n.t('report.label.others') : model.refersite;
   * } else if (model.page) {
   * name = model.page === 'report.label.others' ? i18n.t('report.label.others') : model.page;
   * } else if (model.referpage) {
   * name = model.referpage === 'report.label.others' ?
   * i18n.t('report.label.others') : model.referpage;
   * }
   * return name;
   */

  const name = model.refersite || model.page || model.referpage || '';
  return name === 'report.label.others' ? i18n.i('report.label.others') : name;
}

const refersiteObj = {
  refersite: 'www.google.com',
  number: 12345,
};

const pageObj = {
  page: 'www.page.com',
  number: 879,
};

const referpageObj = {
  referpage: 'www.referpage.com',
  number: 8900,
};

const emptyObj = {};

const i18nObj = {
  refersite: 'report.label.others',
  number: 9527,
};

console.log(getI18nizedList(refersiteObj));
console.log(getI18nizedList(pageObj));
console.log(getI18nizedList(referpageObj));
console.log(getI18nizedList(emptyObj));
console.log(getI18nizedList(i18nObj));
