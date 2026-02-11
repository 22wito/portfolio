import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService, Theme } from '../../services/theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected themeService = inject(ThemeService);
  protected Theme = Theme;
  isMenuCollapsed = true;
}
