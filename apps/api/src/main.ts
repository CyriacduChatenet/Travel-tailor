import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as swaggerUi from 'swagger-ui-dist';
import express from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Travel tailor API')
    .setDescription('The travel tailor API')
    .setVersion('1.2')
    .addTag('travel tailor')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/doc', app, document);
  app.use('/api/v1/doc', express.static(swaggerUi.getAbsoluteFSPath()));

  const corsOptions: CorsOptions = {
    origin: [`${process.env.CLIENT_APP_URL}`],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS',
    allowedHeaders: 'Authorization, Content-Type',
  };

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.API_PORT);
}
bootstrap();
