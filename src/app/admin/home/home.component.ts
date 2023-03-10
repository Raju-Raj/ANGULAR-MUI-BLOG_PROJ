import { Component,AfterViewInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav

  mobVer:boolean=false

  constructor(private observer:BreakpointObserver){}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
        this.mobVer = true;
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
        this.mobVer=false;
      }
    })
  }

}
