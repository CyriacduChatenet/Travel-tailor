import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESQL_DATABASE_HOST,
      port: parseInt(process.env.POSTGRESQL_DATABASE_PORT),
      username: process.env.POSTGRESQL_DATABASE_USERNAME,
      password: process.env.POSTGRESQL_DATABASE_PASSWORD,
      database: process.env.POSTGRESQL_DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      poolSize: 20,
    }),
  ],
})
export class DatabaseModule {}
