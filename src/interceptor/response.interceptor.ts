import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
interface Response<T> {
    data: T
}
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest()

        return next
            .handle()
            .pipe(
                map(data => {
                    return {
                        code: 0,
                        timestamp: new Date().toISOString(),
                        message: '',
                        url: request.url,
                        data: data
                    }
                })
            );
    }
}
