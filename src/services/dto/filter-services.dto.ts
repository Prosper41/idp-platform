import { IsOptional, IsString, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterServicesDto {
  @ApiPropertyOptional({ example: 'platform-team' })
  @IsOptional()
  @IsString()
  team?: string;

  @ApiPropertyOptional({ example: 'critical' })
  @IsOptional()
  @IsString()
  tag?: string;

  @ApiPropertyOptional({ example: 'TypeScript' })
  @IsOptional()
  @IsString()
  language?: string;

  @ApiPropertyOptional({ enum: ['active', 'deprecated', 'archived'] })
  @IsOptional()
  @IsIn(['active', 'deprecated', 'archived'])
  status?: string;
}
