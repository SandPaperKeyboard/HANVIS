"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const axios_1 = require("axios");
const app_module_1 = require("./app.module");
const sec = 1000;
const min = 60 * sec;
var url;
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
    url = await app.getUrl();
}
bootstrap();
setInterval(async () => {
    console.log(await axios_1.default.get(url + "/api")
        .then().catch());
}, 1 * sec);
//# sourceMappingURL=main.js.map