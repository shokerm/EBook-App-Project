// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';


// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private usersService: AuthService,
//         private router: Router,
//         private dialog: DialogBoxService
//     ) { }

//     canActivate() {
//         if (!this.usersService.loggedInUser) {
//             this.router.navigate(['/login'])
//                 .then(() => {
//                     this.dialog.fire(
//                         'יש להיות מחובר על מנת לקבל גישה לאזור זה',
//                         'warning'
//                     );
//                 });
//         }
//         return this.usersService.loggedInUser !== null;
//     }
// }