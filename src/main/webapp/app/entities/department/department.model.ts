import { BaseEntity } from './../../shared';

export class Department implements BaseEntity {
    constructor(
        public id?: string,
        public name?: string,
        public city?: string,
    ) {
    }
}
