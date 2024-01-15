import { Schema, models, model, Document } from "mongoose";


export interface IUser extends Document {
    //Author
    clerkId: string;
    name: string;
    picture: string;
    username: string;
    email: string;
    password?: string;
    location?: string;
    bio?: string;
    joinDate: Date;
    portfolioWebsite?: string;
    saved: Schema.Types.ObjectId[];
    reputation: string;
}

const UserSchema = new Schema ({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // You might want to consider using a hashing library for passwords
    location: { type: String },
    bio: { type: String },
    joinDate: { type: Date, default: Date.now },
    portfolioWebsite: { type: String },
    saved:[{ type: Schema.Types.ObjectId, ref: 'Question' }],
    reputation: { type: String, default: 0},
  });

const User = models.User || model('User', UserSchema);

export default User;