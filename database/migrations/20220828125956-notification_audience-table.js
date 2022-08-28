'use strict';

const tableName = 'notification_audience';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: Sequelize.STRING, allowNull: false },
      entity_id: { type: Sequelize.STRING, allowNull: false },
      entity_type: {
        type: Sequelize.ENUM(
          'ROOM',
          'SPACE',
          'POST',
          'USER',
          'COMMENT',
          'REPLY',
        ),
        allowNull: false,
      },
      action: {
        type: Sequelize.ENUM(
          'CREATED',
          'RE_POSTED',
          'QUOTED',
          'INTERESTED',
          'COMMENTED',
          'REPLIED',
          'MEMBER',
          'FOLLOWED',
          'PAID',
          'TAGGED',
          'MENTIONED',
          'SUBSCRIBED',
        ),
        allowNull: false,
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(tableName);
  },
};
