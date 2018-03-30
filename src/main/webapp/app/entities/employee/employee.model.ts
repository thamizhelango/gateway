import { BaseEntity } from './../../shared';

export class Employee implements BaseEntity {
    constructor(
        public id?: string,
        public name?: string,
        public age?: number,
    ) {
    }
}
