import mongoose from 'mongoose'
import { IBtechStudent } from 'server/models/students/btech'

export interface IMtechStudent extends IBtechStudent {}

const mtechStudentSchema = new mongoose.Schema<IMtechStudent>(
  {
    name: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    mailId: {
      type: String,
      required: true,
    },
    githubUrl: String,
    linkedinUrl: String,
    tech: [String],
    websiteLink: String,
    achievements: [
      {
        title: String,
        body: String,
        link: String,
      },
    ],
  },
  { timestamps: true }
)

export const MtechStudent =
  mongoose.models.MtechStudent ||
  mongoose.model<IMtechStudent>('MtechStudent', mtechStudentSchema)
