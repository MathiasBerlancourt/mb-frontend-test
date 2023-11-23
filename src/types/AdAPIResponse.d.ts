import {Ad} from "./Ad";

export interface AdAPIResponse{
    statusCode: number;
    error: boolean;
    message: string;
    env: string;
    time: number;
    data: {
        ads: Ad[];
    }
}
