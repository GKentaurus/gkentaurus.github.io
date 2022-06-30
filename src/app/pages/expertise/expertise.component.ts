import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit, OnDestroy {
  cardData = [
    {
      title: 'Team work',
      description:
        'Excellent communication, coordination and synergy with the other members of the team, to carry out the imposed projects.'
    },
    {
      title: 'Mentor',
      description:
        'Great ability to expose and explain basic and complex topics, for the understanding of others, in order to advance as a team.'
    },
    {
      title: 'Organized',
      description:
        'For better understanding, scalability and maintenance in projects, I like to keep an order that can be practical and useful for everyone.'
    },
    {
      title: 'Learning',
      description:
        'I am self-taught and constantly updating myself. I like to keep abreast of development trends, to offer better solutions.'
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Expertise');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
