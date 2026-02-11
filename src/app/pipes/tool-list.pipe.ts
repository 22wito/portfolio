import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toolList',
  standalone: true
})
export class ToolListPipe implements PipeTransform {
  transform(tools: string[]): string {
    if (!tools || tools.length === 0) return '';
    return tools.join(' • ');
  }
}
