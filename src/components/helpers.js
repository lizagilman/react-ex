import PropTypes from 'prop-types';

const bookDataDefaultProps = PropTypes.shape({
  id: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  publiush_date: PropTypes.string,
});

export const titlieze = (str) => {
  if (!str) return '';
  /* eslint-disable-next-line */
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  let stringArray = str.split(' ');
  /* eslint-disable-next-line */
  stringArray = stringArray.map(str => capitalize(str.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '')),);

  return stringArray.join(' ');
};

export const validateField = (field, value) => {
  const nonEmpty = /^(.+)$/;

  const validationRegexHash = {
    date: /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
    title: nonEmpty,
    author: nonEmpty,
    description: nonEmpty,
  };

  /* eslint-disable-next-line */
  return !!value.match(validationRegexHash[field]) ? true : false;
};

export const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit';

export const noImgUrl = 'images/empty.png';

export default bookDataDefaultProps;
