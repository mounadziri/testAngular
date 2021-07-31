import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  searchText: any;
  posts = JSON.parse(localStorage.getItem('user') || '[]');
  allPosts = []

 constructor() { }

  ngOnInit(): void {
    this.allPosts = this.posts;
  }
  delete(i: number): void {
    this.posts.splice(i, 1);
    localStorage.setItem('user', JSON.stringify(this.posts))
  }

}
