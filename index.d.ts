import type { Request as Request_, Response as Response_ } from "express";

interface ParamsDictionary {
    [key: string]: string;
}

export type Request = Request_<ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>
export type Response = Response_<any, Record<string, any>, number>

export interface ObjectProps {
    objectShape: "rectangle" | "cube";
    width?: number;
    height?: number;
    backgroundColor?: string;
    labels?: {
        [key: "front" | "back" | "right" | "left" | "top" | "bottom"]: string;
    }
}

export interface DrawInfo {
    styles: string;
    HTML: string;
}

export interface RouteContext {
    request: Request;
    response: Response;
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