import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

  showPopupBitesquad: Boolean = false;
  showPopupBiointeractive: Boolean = false;
  showPopupVolcano: Boolean = false;
  showPopupVideoGames: Boolean = false;
  showPopupGFunds: Boolean = false;
  showPopupGlobal: Boolean = false;
  showPopupInnovation: Boolean = false;
}

