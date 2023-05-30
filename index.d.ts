export interface ObjectProps {
    objectType: "rectangle" | "cube"
}

export class Server {
    /// this function is no longer being used because it does nothing
    draw(objectProps: ObjectProps): void;

    /// to get a route
    get(routePath: string, routeHandler: (ctx) => void): void;

    /// to listen to the server
    listen(port: string, callback: () => void): void;
}