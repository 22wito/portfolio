import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      name: 'Resumen de Audios',
      description: 'Transcripción de audio automática y posterior resumen mediante IA completamente en local.',
      tools: ['Python', 'Whisper', 'Ollama'],
      link: 'https://github.com/22wito'
    },
    {
      name: 'KriterIA',
      description: 'Aplicación Web que ayuda en la elección de productos adaptados a las necesidades específicas de cada usuario, utilizando IA en todo el proceso.',
      tools: ['Node.js', 'Express', 'Gemini API', 'React', 'MongoDB'],
      link: 'https://github.com/22wito'
    },
    {
      name: 'Home Lab Server',
      description: 'Servidor casero con un portatil antiguo en el que se alojan varias aplicaciones personales.',
      tools: ['Linux']
    },
    {
      name: 'Avisos F1',
      description: 'Control de tira con WLED sobre datos en tiempo real sobre la F1.',
      tools: ['WLED', 'Python'],
      link: 'https://github.com/22wito'
    }
  ];

  constructor() {
    // Almacenamiento en caché para cumplir Tema 14 (web storage)
    this.cacheProjects();
  }

  getProjects(): Observable<Project[]> {
    try {
      const cached = localStorage.getItem('projects_cache');
      if (cached) {
        return of(JSON.parse(cached));
      }
      return of(this.projects);
    } catch (error) {
      return throwError(() => new Error('Error al recuperar proyectos'));
    }
  }

  private cacheProjects() {
    localStorage.setItem('projects_cache', JSON.stringify(this.projects));
  }
}
