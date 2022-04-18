import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

describe('AuthService', () => {

  let authService: AuthService;
  // let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
    // usersService = await module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });


  describe('when accessing the data of authenticating user', async () => {
    it('should attempt to get the user by email', () => {

      // const getByEmailSpy = jest.spyOn(usersService, 'findByEmail').mockImplementation(async () => user);
      // expect(await ).toBeCalledTimes(1);
    })
  })
});
