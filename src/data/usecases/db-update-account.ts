import { UpdateAccount } from "../../domain/usecases";

export class DbUpdateAccount implements UpdateAccount {
  constructor () {}

  async update(account: UpdateAccount.Params): Promise<UpdateAccount.Result> {
      // 여기서부터 db에 비번 update 로직 짜기
  }
}
