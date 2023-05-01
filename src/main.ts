/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // this tell to nestjs, on extracting the body incoming request
        // you return only the attribte that they refer to the dto here
      whitelist: true,
    })
  );
  await app.listen(3000);
}
bootstrap();
