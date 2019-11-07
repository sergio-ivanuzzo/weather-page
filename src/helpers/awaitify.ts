export type IPromiseMethod = (value?: any) => void;

export function awaitify(action: Function): Promise<any> {
    return new Promise<any>((resolve: IPromiseMethod, reject: IPromiseMethod): void => {
        action(resolve, reject);
    });
}
