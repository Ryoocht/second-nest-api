

export class PostDto extends AbstractCrudDto {

    title: string

    content: string

}

export abstract class AbstractCrudDto {
    id: string

    createdAT: Date

    updatedAt: Date
}