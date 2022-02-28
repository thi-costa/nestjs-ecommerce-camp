export const config = () => ({
  app: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
  },
  database: {
    port: 3000,
    jwt_secret: `pM>]zzX7&(,?kw8?DDc;pXSRq^S(=d)^r=~#XUY/7@5{/"@G6{7Q*9}a8k>wj^Na`,
    expires_in: 3600,
    db_host: 'localhost',
    db_port: 5432,
    db_username: 'postgres',
    db_password: 'postgres',
    db_database: 'fashion-ecommerce',
  },
});
