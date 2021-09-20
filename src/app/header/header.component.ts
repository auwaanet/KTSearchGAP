import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $('.sidebarCollapse').on('click', function() {
      if ($('body').hasClass('compact-menu')) {
        $('body').removeClass('compact-menu')
      }
      else{
        $('body').toggleClass('compact-menu');
      }

      console.log('hello');


      // $('body').toggleClass('compact-menu'); .removeClass()
      // $('.sidebar').toggleClass('active');
  });

  }

}
