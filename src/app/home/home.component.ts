import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../shared/post';
import { AngularFireStorage,AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { async } from 'q';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  url: string;
  task: AngularFireUploadTask;
  blog: Post[];
  name: string;
  description: string;
  edit: boolean = false;
  comment: string;
  rating: number;
  userid: string;
  constructor(private blogservice: BlogService,private afStorage: AngularFireStorage, private authService: AuthService,
    private router: Router,private location: Location) { }

  ngOnInit() {
    this.authService.getAuthState()
        .subscribe((user) => {
        if (user) {
          // User is signed in.
          this.userid = user.uid;
        }
      });
    this.blogservice.getBlogs()
      .subscribe(blogs => {
        this.blog = blogs;
      //   for(let i of blogs)
      // {
      //   this.blogservice.getComments(i._id)
      //   .subscribe(comments => {
      //     i.comments = comments;
      //     this.blogs.push(i);
      //   })
      // }
      this.blog.forEach((blog) => {
        this.blogservice.getComments(blog._id)
        .subscribe(comments => {
          blog.comments = comments;
        })
      });
    });
    console.log(this.blog)

  }
  upload(event) {
    const file = event.target.files[0].name;
    this.ref = this.afStorage.ref(file);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()
    this.snapshot.pipe(finalize(() => this.downloadURL = this.afStorage.ref(file).getDownloadURL())).subscribe();
  }
  addblog()
  {
    this.blogservice.postblog(this.name, this.description,this.url).then(() => {
    });
  }
  editblog(id: string,name: string, description: string)
  {
    this.blogservice.putBlog(id,name,description).then(() => {    
    });
  }
  addcomment(id,comment)
  {
    this.blogservice.postcomment(id,comment).then(() => {
    });
  }
  deleteblog(id)
  {
    this.blogservice.deleteBlog(id).then(() => {
    });
  }
  uploaded(downlaodSrc)
  {
    this.url = downlaodSrc;
  }
  putcomment(id,commentid,comment)
  {
    this.blogservice.putcomment(id,commentid,comment).then(() => {
    });
  }
  deletecomment(id,comment_id)
  {
    this.blogservice.deleteComment(id,comment_id).then(() => {
    });
  }
}
