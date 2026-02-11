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
      tools: ['Node.js', 'Express', 'Groq API', 'React', 'MongoDB'],
      link: 'https://github.com/22wito'
    },
    {
      name: 'Home Lab Server',
      description: 'Servidor casero con una Raspberry Pi 5 en la que se alojan varias aplicaciones desarrolladas por y para mí.',
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
