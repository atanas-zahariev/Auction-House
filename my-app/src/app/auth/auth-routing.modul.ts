import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersGuardService } from '../guards/userGuard';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/authGuard';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuardService],
    
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [UsersGuardService],
      },
]

export const authRoutingModul = RouterModule.forChild(routes);