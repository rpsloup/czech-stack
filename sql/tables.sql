CREATE TABLE Categories (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(32),
  icon VARCHAR(32)
);

CREATE TABLE Ideas (
  idea_id SERIAL PRIMARY KEY,
  title VARCHAR(72),
  description TEXT,
  category_id SERIAL,
  CONSTRAINT category_id
    FOREIGN KEY (category_id)
      REFERENCES Categories(category_id)
);
