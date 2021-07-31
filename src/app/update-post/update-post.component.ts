import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  submitted= false;
  updateForm: FormGroup =new FormGroup({
    postName:new FormControl('',[Validators.required, Validators.minLength(4)]),
    desc:new FormControl('',[Validators.required, Validators.minLength(4)]), 

  });
  posts = JSON.parse(localStorage.getItem('user') || '[]');
  index?:number; 


  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.index= this.activatedRoute.snapshot.params.index;
    console.log(this.index);
    let currentProduct= this.posts[this.index || 0];
    this.updateForm.patchValue(currentProduct);
  }
  update(): void {
    this.submitted = true;
    if(this.updateForm.invalid){
      return;
    }
    this.posts.splice(this.index, 1, this.updateForm.value);
    localStorage.setItem('user', JSON.stringify(this.posts));
    this.router.navigate(['/list-post'])
  }

}
