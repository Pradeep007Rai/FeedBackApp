import { PipeTransform, Pipe } from '@angular/core';
import { ClassModel } from '../model/class/class.model';

@Pipe({
    name: 'classFilter'
})
export class ClassFilter implements PipeTransform {
    transform(classes: ClassModel[], searchString: string): ClassModel[] {
        if (!classes || !searchString) {
            return classes;
        }
        return classes.filter(classs =>
            classs.className.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
}
