import { ConfigProviderProps } from 'antd/es/config-provider';

export const config: ConfigProviderProps = {
  theme: {
    hashed: true,
    token: {
      colorPrimary: '#046b09',
      colorBgBase: '#f5f5f5',
    },
    components: {
      Button: {
        size: 20,
      },
    },
  },
  form: {
    colon: false,
    requiredMark: true,
    validateMessages: {
      required: 'This field is required',
    },
  },
  input: {
    autoComplete: 'on',
  },
};
