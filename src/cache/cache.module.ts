import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as CacheModuleManager } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModuleManager.register({
      ttl: 900,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
