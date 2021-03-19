import { LoadRecruitResults } from "../../domain/usecases";
import { RecruitRepository } from "../../infra/db/repositories";
import { ServerError } from "../../presentation/errors";
import { LoadRecruitResultsRepository } from "../protocols/repository/recruit";

export class DbLoadRecruitResults implements LoadRecruitResults {
    constructor(
        private readonly recruitRepository: LoadRecruitResultsRepository
    ) {}
    async loadRecruitResults(input: LoadRecruitResults.Input): Promise<LoadRecruitResults.Result> {
        try {
            const { address, entName, numOfWorker, workContent } = input;
            const list = await this.recruitRepository.loadRecruitResults({
                name: entName,
                specialty: workContent,
                address,
                worker: numOfWorker
            });
            console.log('loadRecruitResults::::::::::::::::::', list);
        } catch (err) {
            console.log(err);
            return { list: [], error: new ServerError() };
        }
    }
}