import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-ngcontent',
  templateUrl: './child-ngcontent.component.html',
  styleUrls: ['./child-ngcontent.component.css']
})
export class ChildNgcontentComponent implements OnInit {

  title : string = "Titre de mon component : NgContent"

  constructor() { }

  ngOnInit(): void {
  }

}
