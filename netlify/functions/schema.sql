-- Draw Results Table
CREATE TABLE IF NOT EXISTS draw_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  game_type VARCHAR(10) NOT NULL,
  winning_numbers VARCHAR(20) NOT NULL,
  first_two VARCHAR(2) NOT NULL,
  draw_time DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bets Table
CREATE TABLE IF NOT EXISTS bets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  game_type VARCHAR(10) NOT NULL,
  combination VARCHAR(5) NOT NULL,
  draw_time VARCHAR(10) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  potential_win DECIMAL(10,2) NOT NULL,
  user_id VARCHAR(50),
  status VARCHAR(20) DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_draw_time ON draw_results(draw_time);
CREATE INDEX IF NOT EXISTS idx_game_type ON draw_results(game_type);
CREATE INDEX IF NOT EXISTS idx_first_two ON draw_results(first_two);
CREATE INDEX IF NOT EXISTS idx_bet_draw_time ON bets(draw_time);
CREATE INDEX IF NOT EXISTS idx_bet_status ON bets(status);
CREATE INDEX IF NOT EXISTS idx_bet_game_type ON bets(game_type);