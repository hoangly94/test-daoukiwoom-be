import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});



// describe('Cats', () => {
//   let app: INestApplication;
//   let catsService = { findAll: () => ['test'] };

//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [CatsModule],
//     })
//       .overrideProvider(CatsService)
//       .useValue(catsService)
//       .compile();

//     app = moduleRef.createNestApplication();
//     await app.init();
//   });

//   it(`/GET cats`, () => {
//     return request(app.getHttpServer())
//       .get('/cats')
//       .expect(200)
//       .expect({
//         data: catsService.findAll(),
//       });
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });