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
        $('.sidebar').toggleClass('active')
      }
      else{
        $('body').toggleClass('compact-menu');
        $('.sidebar').removeClass('active')
      };
    })


    $('.mobilesearch').on('click', function() {
        $(".mobilesearch").attr("aria-expanded","true");
        $('.search-form').removeClass('d-none');
        
    })

    $('.close-button').on('click', function() {
      $(".mobilesearch").attr("aria-expanded","false");
      $('.search-form').toggleClass('d-none');
      
  })

  };

  }


