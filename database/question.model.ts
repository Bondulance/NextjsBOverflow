

import { Schema, models, model, Document } from "mongoose";
import User from "./user.model";
import Tag from "./tag.model";

export interface IQuestion extends Document {
    title: string;
    content: string;
    tags: Schema.Types.ObjectId[];
    views: number;
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
    author: Schema.Types.ObjectId;
    answers: Schema.Types.ObjectId[];
    createdAt: Date;
}

const QuestionSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: [{ type: Schema.Types.ObjectId, ref: Tag}],
    author: { type: Schema.Types.ObjectId, ref: User},
    upvotes: [{ type: Schema.Types.ObjectId, ref: User}],
    downvotes: [{ type: Schema.Types.ObjectId, ref: User}],
    views: {type: Number, default: 0},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    createdAt: {type: Date, default: Date.now}

})

const Question = models.Question || model('Question', QuestionSchema);

export default Question;