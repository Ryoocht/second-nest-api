import { PartialType, OmitType } from '@nestjs/mapped-types';
import { PostDto } from './post.dto';

export class CreatePostDto extends OmitType(PostDto, 
    ["id", "createdAt"] as const
    ){}
