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
import { EntityType, ActionType } from '../../utils/enums';

@Table({ underscored: true })
export class NotificationAudience extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  userId: string;

  @Column({ allowNull: false })
  entityId: string;

  @Column({ allowNull: false })
  entityType: EntityType;

  @Column({ allowNull: false })
  action: ActionType;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
