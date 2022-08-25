import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ underscored: true })
export class Contact extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: true, unique: true })
  userId: string;

  @Column({ allowNull: true, unique: true })
  email: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
