import {
  PrimaryKey,
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ underscored: true })
export class Contact extends Model {
  @Column
  @PrimaryKey
  id: number;

  @Column({ allowNull: true })
  user_id: string;

  @Column({ allowNull: true })
  email: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
