import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react({
      jsx: 'react',
      swc: {
        jsc: {
          transform: {
            react: {
              throwIfNamespace: false, // Disable JSX namespace check
            },
          },
        },
      },
    }),
  ],
};
