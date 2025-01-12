import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with user not authenticated', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should set isAuthenticated to true when login is called', () => {
    service.login();
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should set isAuthenticated to false when logout is called', () => {
    // First login to set initial state
    service.login();
    expect(service.isLoggedIn()).toBeTrue();

    // Then test logout
    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should maintain authentication state between calls', () => {
    expect(service.isLoggedIn()).toBeFalse();

    service.login();
    expect(service.isLoggedIn()).toBeTrue();
    expect(service.isLoggedIn()).toBeTrue(); // Second check to verify state persists

    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
    expect(service.isLoggedIn()).toBeFalse(); // Second check to verify state persists
  });
});
