import { Component, OnInit } from '@angular/core';
import { AwesomeService } from '../awesome.service';


@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomes: any;
  awesome: any;

  constructor( private awesomeService: AwesomeService) {
    this.getAwesome()
  }

  ngOnInit(): void {
  }
  getAwesome() {
    this.awesomeService.getAwesome().subscribe((data: any) => {
      this.awesomes = data;
      console.log(data);
    });
  }
  deleteAwesome(id: number){
    console.log(id);
      this.awesomeService.deleteAwesome(id).subscribe((data: any) => {
        this.awesome = data;
      });
    }

}
