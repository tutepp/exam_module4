import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Awesome } from '../awesome';
import { AwesomeService } from '../awesome.service';


@Component({
  selector: 'app-awesome-update',
  templateUrl: './awesome-update.component.html',
  styleUrls: ['./awesome-update.component.css']
})
export class AwesomeUpdateComponent implements OnInit {
  id: any | null | undefined;

  awesome!: Awesome;

  updateForm !: FormGroup;

  constructor(private awesomeService: AwesomeService,private activatedRoute: ActivatedRoute ,private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAwesome(this.id);
  }



  getAwesome(id:number){
    this.awesomeService.findById(id).subscribe((data:any) => {

      this.updateForm = this.fb.group({
        tag: [data.tag],
        url: [data.url],
        descriptions: [data.descriptions],
      });

    });
 }

 updateAwesome(id:number){

  this.awesomeService.updateAwesome(this.id, this.updateForm.value).subscribe((data: any) => {
    
    this.gotoList();
    console.log(data);


  });
}

gotoList() {
  this.router.navigate(['/awesomes']);
}

}
