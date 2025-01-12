import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let router: Router;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    // Create a spy object for AuthService
    authService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);

    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: AuthService, useValue: authService }],
    });

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
  });

  it('should allow access when user is logged in', () => {
    // Arrange
    authService.isLoggedIn.and.returnValue(true);

    // Act
    const result = TestBed.runInInjectionContext(() =>
      authGuard({} as any, {} as any)
    );

    // Assert
    expect(result).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to home and deny access when user is not logged in', () => {
    // Arrange
    authService.isLoggedIn.and.returnValue(false);

    // Act
    const result = TestBed.runInInjectionContext(() =>
      authGuard({} as any, {} as any)
    );

    // Assert
    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
