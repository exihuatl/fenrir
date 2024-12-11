const typeDefinitions = {
  '.paragraph-p1-regular': {
    fontFamily: 'var(--font-primary)',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.125rem',
    lineHeight: '1.2',
  },
  '.paragraph-p1-bold': {
    fontFamily: 'var(--font-primary)',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    lineHeight: '1.2',
  },
  '.paragraph-p2-regular': {
    fontFamily: 'var(--font-primary)',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.11',
  },
  '.paragraph-p2-bold': {
    fontFamily: 'var(--font-primary)',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.11',
  },
  '.paragraph-p3-regular': {
    fontFamily: 'var(--font-primary)',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.14',
  },
  '.paragraph-p3-bold': {
    fontFamily: 'var(--font-primary)',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    lineHeight: '1.14',
  },
};

module.exports = ({ addComponents }) => {
  addComponents(typeDefinitions);
};

module.exports.typogDefinitions = typeDefinitions;
