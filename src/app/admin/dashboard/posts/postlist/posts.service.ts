import { Injectable } from '@angular/core';
import { post } from './post.model';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:post[] = [];
  private postUpdate = new Subject<post[]>();

  

  constructor() { }

  addPost(title:string,content:string){
    const post:post={title:title,content:content,dateTime:new Date()}
    this.posts.push(post)
    this.postUpdate.next([...this.posts]);
  }

  getUpdateListner(){
    return this.postUpdate.asObservable();
  }

  getAll(){
    return [...this.posts]
  }
}
