import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
