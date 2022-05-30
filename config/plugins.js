module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'iancitoevers@gmail.com',
        defaultReplyTo: 'iancitoevers@gmail.com',
      },
    },
  },
  // ...
});