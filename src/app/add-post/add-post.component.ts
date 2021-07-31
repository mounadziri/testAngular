import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted= false;
  addForm: FormGroup =new FormGroup({
    postName:new FormControl('',[Validators.required, Validators.minLength(4)]),
    desc:new FormControl('',[Validators.required, Validators.minLength(4)]), 


  });
  

  constructor(private router:Router) { 
    // ***test*****
    // this.addForm = this.fb.group(
      
        // addpost:new FormControl("",[Validators.required, Validators.minLength(4)]),
        // desc:new FormControl("",[Validators.required, Validators.minLength(4)]), 


      }
    // )
  

  ngOnInit(): void {

  }
  add() {
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    var user = JSON.parse(localStorage.getItem('user') || '[]');
    user.push(this.addForm.value);
    localStorage.setItem('user', JSON.stringify(user));
// ****test***
  // onSubmit():void{
    // console.log(this.addForm.get("addpost")!.value);
    // console.log(this.addForm.get("desc")!.value);

  }
  // add(): void{
  //   alert("buttun cliked")

  // }
}
