import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
