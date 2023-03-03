import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as path from 'path';

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
  SwaggerModule.setup('api/v1/doc', app, document, {
    customCssUrl: path.resolve(
      __dirname,
      '../node_modules/swagger-ui-dist/swagger-ui.css',
    ),
  });

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
