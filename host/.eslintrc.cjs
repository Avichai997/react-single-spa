module.exports = {
  extends: [require.resolve('@chkp-i2/mgmt-eslint-config/client')],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
