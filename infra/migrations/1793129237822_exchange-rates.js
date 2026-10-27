exports.up = (pgm) => {
  pgm.createTable("exchange_rate", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    rate: { type: "numeric(10, 4)", notNull: true },
    currency_id: {
      type: "uuid",
      notNull: true,
      references: '"currency"',
      onDelete: "CASCADE",
    },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {};
