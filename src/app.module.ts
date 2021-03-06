import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppGateway } from './app.gateway'
import { RoomModule } from './room/room.module'
import { RoomGateway } from './room/room.gateway'

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
        UserModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            synchronize: true,
            autoLoadEntities: true,
        }),
        RoomModule,
    ],
    controllers: [],
    providers: [AppGateway],
})
export class AppModule {}
