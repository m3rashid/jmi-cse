import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface ICompany {
  name: string
}

const companySchema = new mongoose.Schema<ICompany>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
)

const Company = mongoose.model<ICompany>('Company', companySchema)
export default Company
