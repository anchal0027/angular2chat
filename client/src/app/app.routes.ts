import {RegisterComponent} from './registration/register.component';
import {LoginComponent} from './login/login.component';
import {usersToChatPageComponent} from './usersToChat/usersToChat.component';
import {startChatComponent} from './startChat/startChat.component';

export const route=[
{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'chatpage',component:usersToChatPageComponent},
{path:'startchat',component:startChatComponent}
]