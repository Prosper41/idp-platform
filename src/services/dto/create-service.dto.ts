import { IsString, IsOptional, IsUrl, IsIn } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  owner: string;

  @IsOptional()
  @IsUrl()
  repoUrl?: string;

  @IsOptional()
  @IsIn(['active', 'deprecated', 'archived'])
  status?: string;
}
