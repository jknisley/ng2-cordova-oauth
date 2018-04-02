import { Oauth } from '../oauth';
export declare class OauthBrowser extends Oauth {
    static WATCH_POPUP_TIMEOUT: number;
    defaultWindowOptions: {
        width: number;
        location: number;
        toolbar: number;
    };
    protected openDialog(url: string, params: any, options?: any): Promise<{}>;
    private addWindowRect(params);
}
