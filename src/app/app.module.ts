import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
// 路由模块
import { RouterModule, Routes } from '@angular/router';
// 表单组件
import { FormsModule } from '@angular/forms';
// 英雄编辑器组件
import { HeroesComponent } from './heroes/heroes.component';
// 英雄编辑器详情组件
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// 消息组件
import { MessagesComponent } from './messages/messages.component';
// ---main---///////////////////////-----------------------------------------
import { MsgComponent } from './msg/msg.component';
import { MsgCenterComponent } from './msg/msg-center/msg-center.component';
import { AttendanceComponent } from './msg/attendance/attendance.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/msg', pathMatch: 'full' },
  {
    path: 'msg',
    component: MsgComponent,
    children: [
      { path: '', 
        redirectTo: 'msgCenter', 
        pathMatch: 'full' 
      },
      { path: 'msgCenter', 
        component: MsgCenterComponent 
      },
      { path: 'msgAttendance', 
        component: AttendanceComponent 
      }
    ]
  },
  { path: 'message', component: MessagesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    MsgComponent,
    MsgCenterComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // <-- debugging purposes only
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
