import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.model';
import { ToolListPipe } from '../../../pipes/tool-list.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ToolListPipe],
  template: `
    <div class="card h-100 project-card shadow-sm border-0" (click)="onCardClick()">
      <div class="card-body p-4">
        <h3 class="card-title h4 fw-bold mb-3 text-primary">{{ project.name }}</h3>
        <p class="card-text text-theme-visible mb-4">{{ project.description }}</p>

        <!-- Pipe usage for accessibility/tooltip -->
        <div class="d-flex flex-wrap gap-2 mb-4" [title]="project.tools | toolList">
          @for (tool of project.tools; track tool) {
            <span class="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill small">
              {{ tool }}
            </span>
          }
        </div>

        @if (project.link) {
          <a [href]="project.link" target="_blank" class="btn btn-outline-primary btn-sm rounded-pill px-4" (click)="$event.stopPropagation()">
            Proyecto <i class="bi bi-arrow-right ms-1"></i>
          </a>
        }
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      cursor: pointer;
      height: 100%;
    }
    .badge {
      font-weight: 500;
      background-color: var(--bg-color) !important;
      color: var(--primary-color) !important;
      border: 1px solid var(--border-color);
    }
  `]
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
  @Output() projectSelected = new EventEmitter<Project>();

  onCardClick() {
    this.projectSelected.emit(this.project);
  }
}
