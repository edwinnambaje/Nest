import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../tasks.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ]
    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if (!this.isValid(value)) {
            throw new BadRequestException(`Invalid status: ${value}`);
        }
        return value;
    }
    private isValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status)
        return idx !== -1
    }
}