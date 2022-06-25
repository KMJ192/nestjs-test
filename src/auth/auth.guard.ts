import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

// 액세스 가능 여부
// 로그인 하지 않은 사용자 접근 방지
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();

      const jwt = request.cookies['jwt'];

      return this.jwtService.verify(jwt);
    } catch (_) {
      return false;
    }
  }
}
