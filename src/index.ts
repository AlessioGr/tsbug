import type { PayloadRequest } from 'payload' // Need some kind of import from payload in my project, otherwise the declare module won't find the payload module despite it being installed


declare module 'payload' {
    export interface DatabaseAdapter {
        test: string
    }
}
