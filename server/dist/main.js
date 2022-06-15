"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const axios_1 = require("axios");
const app_module_1 = require("./app.module");
const sec = 1000;
const min = 60 * sec;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        disableErrorMessages: true,
    }));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
setInterval(() => {
    console.log(axios_1.default.get("http://localhost:5000/api")
        .then().catch());
}, sec);
//# sourceMappingURL=main.js.map