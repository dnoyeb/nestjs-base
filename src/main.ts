import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('swagger案例')
    .setDescription('这是描述')
    .setVersion('1.0')
    .addTag('用户')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  console.log('http://localhost:3000/api/')
  await app.listen(3000);
}
bootstrap();
