// clerkId, email, username, photo, firstName, lastName, planId, creditBalance

import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo?: string;
  firstName: string;
  lastName: string;
  planId?: string;
  creditBalance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String},
  lastName: { type: String},
  planId: { type: Number, default:1 },
  creditBalance: { type: Number, required: true, default: 10 }
});

// schema into model
const User = models?.User || model('User', UserSchema);

export default User;
