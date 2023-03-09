
export interface RoomModel {
  id?: number,
  dormitoryId: number,
  roomNumber?: string,
  capacity?: number,
  furniture?: FurnitureItemModel[]
}

export interface FurnitureItemModel {
  id?: number,
  furnitureType: string
}
