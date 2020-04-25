import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onCreatePost(postData:Post) {
    // Send Http request
    this.http
      .post<{name:string}>(
        'https://pivot-e2516.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
 this.http.get<{[key:string]: Post}>('https://pivot-e2516.firebaseio.com/posts.json').pipe(map(responseData =>{
   const postsArray: Post[]=[];
   for(const key in responseData){
     if(responseData.hasOwnProperty(key)){
       postsArray.push({...responseData[key]});
     }
   }
 })).subscribe(posts=>{
    
     //console.log(posts);
 
  });
  }
}
