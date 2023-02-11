type ProfileCardData = {
    url: string;
    amount: number;
}

export type ProfileCardType = {
    sessionId: string;
    time: string;
    data: ProfileCardData[];
};