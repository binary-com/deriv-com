// src/utils/logger.ts

import fs from 'fs';
import path from 'path';

class Logger {
  static logVerificationProcess(status: string, userDetails: any, errorMessage?: string) {
    const logFilePath = path.join(__dirname, '../logs/verification.log');
    const logMessage = `[${new Date().toISOString()}] Verification Status: ${status}\nUser Details: ${JSON.stringify(userDetails)}\nError Message: ${errorMessage || 'N/A'}\n\n`;

    try {
      fs.appendFileSync(logFilePath, logMessage);
    } catch (error) {
      console.error(`Error occurred while logging verification process: ${error}`);
    }
  }
}

export default Logger;
