import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_ROUTES } from './shared/routes/auth.routes';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
// import { ChatLayoutComponent } from './layouts/chat-layout/chat-layout.component';
import { CHAT_ROUTES } from './shared/routes/chat.routes';
import { ChatsComponent } from './home/chats/chats.component';

const routes: Routes = [
  {
    path:"",
    component:AuthLayoutComponent,
    children:AUTH_ROUTES
  },
  // {
  //   path:"chat",
  //   component:ChatLayoutComponent,
  //   children:CHAT_ROUTES
  // },
  {
    path:"chat",
    component:ChatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
