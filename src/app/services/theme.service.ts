import { Injectable, signal, effect } from '@angular/core';

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSignal = signal<Theme>(this.getInitialTheme());

  theme = this.themeSignal.asReadonly();

  constructor() {
    effect(() => {
      const theme = this.themeSignal();
      this.updateDocumentTheme(theme);
      localStorage.setItem('theme', theme);
    });

    this.listenToSystemChanges();
  }

  toggleTheme() {
    this.themeSignal.update(t => t === Theme.Light ? Theme.Dark : Theme.Light);
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && Object.values(Theme).includes(savedTheme)) {
      return savedTheme;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? Theme.Dark : Theme.Light;
  }

  private listenToSystemChanges() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this.themeSignal.set(e.matches ? Theme.Dark : Theme.Light);
      }
    });
  }

  private updateDocumentTheme(theme: Theme) {
    const html = document.documentElement;
    if (theme === Theme.Dark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }
}
