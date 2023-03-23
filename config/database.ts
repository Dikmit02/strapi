export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_DATABASE'),
      user: env('DB_USER'),
      password: env('DB_PASSWORD'),
      schema: env('DATABASE_SCHEMA'), // Not required
      ssl: env('DATABASE_SSL', false),
    },
    debug: false,
  },
})
