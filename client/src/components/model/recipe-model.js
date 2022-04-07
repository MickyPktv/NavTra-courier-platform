export const DEFAULT_AUTOR_ID = 2

export class Recipe {
    constructor(title, content,  cookingTime, imageUrl, longContent, authorId = DEFAULT_AUTOR_ID,  active = true) {
        this.title = title;
        this.content = content;
        this.cookingTime = cookingTime;
        this.imageUrl = imageUrl;
        this.longContent = userContent;
        this.authorId = authorId;
        this.active = active;
    }
}