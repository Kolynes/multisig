import {Vue, Component, Ref} from "vue-property-decorator";

@Component
export default class Home extends Vue {
    contracts: string[] = [];
    proposals: IProposal[] = [];
    selectedContract = "";
    showCreateContract = false;
    creatingContract = false;
    owner1 = "";
    owner2 = "";
    owner3 = "";
    minimumVotes = 2;
    amount = 0;
    recipient = "";

    @Ref()
    createContractForm!: {validate: () => boolean, reset: () => void};

    selecteContract(contract: string): void {
        this.selectedContract = contract;
    }

    async createContract(): Promise<boolean> {
        return true;
    }

    async createProposal(): Promise<boolean> {
        return true;
    }

    async getProposals(): Promise<void> {
        return;
    }

    async voteProposal(proposal: IProposal): Promise<boolean> {
        return true;
    }
}