import { IsString, IsOptional, IsUrl, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ example: 'auth-service' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Handles authentication and authorization' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'platform-team' })
  @IsString()
  owner: string;

  @ApiPropertyOptional({ example: 'https://github.com/org/auth-service' })
  @IsOptional()
  @IsUrl()
  repoUrl?: string;

  @ApiPropertyOptional({ enum: ['active', 'deprecated', 'archived'] })
  @IsOptional()
  @IsIn(['active', 'deprecated', 'archived'])
  status?: string;
}
