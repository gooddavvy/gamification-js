import type { Request as Request_, Response as Response_ } from "express";

export type Request = Request_
export type Response = Response_
export interface ObjectProps {
    objectShape: "rectangle" | "cube";
    width?: number;
    height?: number;
    backgroundColor?: string;
    labels?: {
        [key: string]: string;
    }
}

export interface DrawInfo {
    styles: string;
    HTML: string;
}

export interface RouteContext {
    req: Request;
    res: Response;
    title: (pageTitle: string) => string;
    setTheme: (theme: string) => string;
    setFontFamily: (fontFamily: string) => string;
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