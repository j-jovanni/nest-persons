import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Pesons api documentation')
		.setVersion('1.0')
		.build();
	const _document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, _document);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);
	app.enableCors();

	await app.listen(8080);
}
bootstrap();
