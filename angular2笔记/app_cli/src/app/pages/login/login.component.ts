import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;
  verification: string;

  constructor(private router: Router) {}
  ngOnInit() {}

  /**
   * 点击登录
   */
  login() {
    this.router.navigate(['/home']);
  }
}
