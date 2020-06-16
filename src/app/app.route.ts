import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';

const ROUTES: Routes = [
    { path: 'default', component: UserProfileComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserProfileComponent },
];

export { ROUTES };