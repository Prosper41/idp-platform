import { IsString, IsOptional, IsUrl, IsIn, IsArray } from 'class-validator';
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

  @ApiPropertyOptional({ example: 'platform-team' })
  @IsOptional()
  @IsString()
  team?: string;

  @ApiPropertyOptional({ example: 'https://github.com/org/auth-service' })
  @IsOptional()
  @IsUrl()
  repoUrl?: string;

  @ApiPropertyOptional({ enum: ['active', 'deprecated', 'archived'] })
  @IsOptional()
  @IsIn(['active', 'deprecated', 'archived'])
  status?: string;

  @ApiPropertyOptional({ example: ['TypeScript', 'SQL'], type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  language?: string[];

  @ApiPropertyOptional({
    example: ['backend', 'auth', 'critical'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
