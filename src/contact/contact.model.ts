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
  @PrimaryKey
  @Column
  id: number;

  @Column({ allowNull: true })
  user_id: string;

  @Column({ allowNull: true })
  email: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
