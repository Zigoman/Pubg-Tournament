import * as bcrypt from 'bcryptjs';

export class Auth {
  public static hashPassword(password: string, rounds: number, callback: (err: Error, hash: string) => void): void {
    bcrypt.hash(password, rounds, (err, hash) => {
      callback(err, hash);
    });
  }

  public static compare(
    password: string,
    dbHash: string,
    callback: (err: string | null, match: boolean | null) => void
  ) {
    bcrypt.compare(password, dbHash, (error: Error, match: boolean) => {
      if (match) {
        callback(null, true);
      } else {
        callback('Invalid password match', null);
      }
    });
  }
}
