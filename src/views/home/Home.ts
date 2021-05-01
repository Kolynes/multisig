import {Vue, Component, Ref} from "vue-property-decorator";

@Component
export default class Home extends Vue {
    contracts: string[] = [];
    selectedContract = "";
    showCreateContract = false;
    owner1 = "";
    owner2 = "";
    owner3 = "";
    minimumVotes = 2;

    @Ref()
    createContractForm!: {validate: () => boolean, reset: () => void};

    selecteContract(contract: string): void {
        this.selectedContract = contract;
    }

    async createContract(): Promise<boolean> {
        return true;
    }
}