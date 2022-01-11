module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4bab5e1be2c702cd874d95f8eb643f8d'),
  },
});
