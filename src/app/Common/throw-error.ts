import { User } from "src/app/Models/user";

export class Common {
    public throwError(error: User) {
        console.error(error);
        this.throwError(error);
    }
}


