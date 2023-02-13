import { Component } from '@angular/core';
import { PostsService } from './postlist/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(private ps:PostsService){}

  onPostDate(data:any){
    if(data.valid){
      let title=data.value.title
      let content = data.value.content
      this.ps.addPost(title,content)
      data.value()
    }else{
      return
    }
    
  }
}
