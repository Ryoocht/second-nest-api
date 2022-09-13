import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'I have signuped up';
  }

  signin() {
    return 'I have signined in';
  }
}
