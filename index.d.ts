import type { Express, Request as Request_, Response as Response_ } from "express";
export type { ObjectProps } from "./draw";

export type Request = Request_
export type Response = Response_ & {
    sendJSON: (data: any) => void;
}
export type ExpressServer = Express;

export interface DrawInfo {
    styles: string;
    HTML: string;
}

export interface RouteContext {
    req: Request;
    res: Response;
    title: (pageTitle: string) => string;
    button: (label: string, onClick: () => void, styles?: Object | undefined) => void;
    setTheme: (theme: string) => string;
    setFontFamily: (fontFamily: string) => string;
    getExpressServer: () => ExpressServer;
    draw: (objectProps: ObjectProps) => string;
}

export class Server {
    /// this function gives html draw info
    draw(objectProps: ObjectProps): DrawInfo;

    /// to get a route
    get(routePath: string, routeHandler: (ctx: RouteContext) => void): void;

    /// to run the server
    run(port: string, callback: () => void): Error;
}