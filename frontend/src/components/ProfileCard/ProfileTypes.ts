type ProfileCardData = {
    url: string;
    carbon: number;
}

export type ProfileCardType = {
    sessionId: string;
    time: string;
    data: ProfileCardData[];
};