import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({timestamps : true})
export class Places extends Document {

  @Prop({ unique: true , required: true})
  name: string;

  @Prop({required: true})
  latitude: string;

  @Prop({required: true})
  longitude: string;

  @Prop({required: true})
  description: string;

  @Prop()
  image: string;

  @Prop({ type: [Types.ObjectId], ref: 'Category' })
  category_id: string
}

export const PlacesSchema = SchemaFactory.createForClass(Places);

