import clientConfig from '@chkp-i2/mgmt-eslint-config/client';

export default [
  ...clientConfig,
  {
    name: 'client/import-resolver-typescript',
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
];
