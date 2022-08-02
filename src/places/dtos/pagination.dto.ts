import { IsOptional, IsPositive, IsObject } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;

  @IsOptional()
  @IsObject()
  search: object;
}
