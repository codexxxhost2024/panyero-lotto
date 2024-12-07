import { Handler } from '@netlify/functions';
import axios from 'axios';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!
});

interface LotteryResult {
  gameType: string;
  numbers: string;
  drawTime: string;
}

const GAME_PRIZES = {
  '6-42': 7000,
  '6-45': 8000,
  '6-49': 9000,
  '6-55': 11000,
  '6-58': 12000
};

export const handler: Handler = async () => {
  try {
    // In a real implementation, you would fetch from PCSO's API
    // For now, we'll simulate the results
    const results: LotteryResult[] = [
      {
        gameType: '6-42',
        numbers: '01-25-32-15-40-22',
        drawTime: new Date().toISOString()
      },
      // Add other game results...
    ];

    // Store results in database
    for (const result of results) {
      const firstTwoDigits = result.numbers.split('-')[0];
      
      await client.execute({
        sql: `INSERT INTO draw_results (game_type, winning_numbers, first_two, draw_time)
              VALUES (?, ?, ?, ?)`,
        args: [result.gameType, result.numbers, firstTwoDigits, result.drawTime]
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ results })
    };
  } catch (error) {
    console.error('Error fetching PCSO results:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch lottery results' })
    };
  }
};