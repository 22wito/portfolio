import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from './project-card/project-card';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {
  projects: Project[] = [];
  loading = true;
  error = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
