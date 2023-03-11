
export interface ApplicationModel {

  id?: number,
  desiredRoom?: {
    id?: number,
    dormitoryId?: number,
    roomNumber?: string
  },
  creationDate?: Date,
  settlementStartDate?: Date,
  settlementEndDate?: Date,
  applicationStatus?: string

}
