import { Module, Action, Mutation, VuexModule, MutationAction } from "vuex-module-decorators";


@Module({namespaced: true})
export default class TerraModule extends VuexModule {
    contracts: [] = [];
    proposals: IProposal[] = [];

    @Action
    async createContract(payload: { owners: string[], initialAmount: number, requiredVotes: number}): Promise<any> {
    }

    @Action
    async createProposal(payload: { amount: number, recipient: string }): Promise<any> {

    }

    @MutationAction({mutate: ["proposals"]})
    async getProposals(payload: { contract: string }) {
        return {proposals: []};
    }

    @Action
    async voteProposal(payload: { proposal: IProposal}): Promise<boolean> {
        return true;
    }
}