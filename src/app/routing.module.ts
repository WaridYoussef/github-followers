import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { HomeComponent } from "./home/home.component";
import { PagnotfoundComponent } from "./pagnotfound/pagnotfound.component";
import { PanelComponent } from "./panel/panel.component";
import { PostsComponent } from "./posts/posts.component";
import { ProfileFollowerComponent } from "./profile-follower/profile-follower.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";

const routes : Routes = [
    {
        path: "home",
        component: HomeComponent
       },
       {
        path: "followers",
        component: GithubFollowersComponent
       },
       {
         path: "followers/:id/:username",
         component: ProfileFollowerComponent
        },
       {
        path: "posts",
        component: PostsComponent
       },
       {
         path: "favorite",
         component: FavoriteComponent
        },
        {
         path: "panel",
         component: PanelComponent
        },
        {
         path: "signup",
         component: SignupFormComponent
        },
        {
         path: "contact",
         component: ContactFormComponent
        },
       {
        path: "**",
        component: PagnotfoundComponent
       },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }