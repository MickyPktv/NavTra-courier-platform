export const DEFAULT_AUTOR_ID = 2

export class User {
    constructor(name, username,  gender, avatarUrl,userContent, authorId = DEFAULT_AUTOR_ID,  active = true) {
        this.name = name;
        this.username = username;
        this.gender = gender;
        this.avatarUrl = avatarUrl;
        this.userContent = userContent;
        this.authorId = authorId;
        this.active = active;
    }
}